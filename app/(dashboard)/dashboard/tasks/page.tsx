import React, { useState, useTransition, useEffect } from "react";
import {
  fetchUserTasks,
  createTaskAction,
  updateTaskAction,
  deleteTaskAction,
} from "./actions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Task = {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
};

async function fetchTasks() {
  "use server";
  const { tasks } = await fetchUserTasks();
  return tasks as Task[];
}

export default function TasksPage() {
  // Because we can't use useEffect (server comp), we'll use progressive enhancement below.
  // On first render, display server-fetched tasks.
  // Use client-side interactivity for CRUD.

  // This will be a Client Component
  return <TaskManager />;
}

function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Load tasks on mount
  useEffect(() => {
    fetchUserTasks().then(({ tasks }) => {
      setTasks(tasks || []);
      setLoading(false);
    });
  }, []);

  // Create Task
  async function onCreate(e: React.FormEvent) {
    e.preventDefault();
    setCreating(true);
    setError(null);
    const formData = new FormData();
    formData.set("title", title);
    formData.set("description", description);
    const response = await createTaskAction({ formData });
    if (response?.error) {
      setError(response.error);
    } else if (response?.task) {
      setTasks((prev) => [response.task, ...prev]);
      setTitle("");
      setDescription("");
    }
    setCreating(false);
  }

  // Update Task
  async function onToggleComplete(task: Task) {
    const formData = new FormData();
    formData.set("id", String(task.id));
    formData.set("title", task.title);
    formData.set("description", task.description || "");
    formData.set("completed", (!task.completed).toString());
    const response = await updateTaskAction({ formData });
    if (response?.task) {
      setTasks((prev) =>
        prev.map((t) => (t.id === response.task.id ? response.task : t))
      );
    }
  }

  // Delete Task
  async function onDelete(id: number) {
    const formData = new FormData();
    formData.set("id", String(id));
    const response = await deleteTaskAction({ formData });
    if (response?.success) {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <p className="text-muted-foreground mb-6">
        Create, assign, and track tasks for your team, all in one place.
      </p>
      <Card className="p-6 mb-6">
        <form onSubmit={onCreate} className="flex flex-col gap-3">
          <input
            className="border rounded px-3 py-2"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            required
          />
          <textarea
            className="border rounded px-3 py-2"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description (optional)"
            rows={2}
          />
          <div className="flex flex-row gap-3 items-center">
            <Button type="submit" disabled={creating || !title.trim()}>
              {creating ? "Creating..." : "Add Task"}
            </Button>
            {error && <span className="text-red-600 text-sm">{error}</span>}
          </div>
        </form>
      </Card>
      <Card className="p-0 overflow-hidden">
        {loading ? (
          <div className="p-6 text-center text-muted-foreground">Loading...</div>
        ) : tasks.length === 0 ? (
          <div className="p-6 text-center text-muted-foreground">No tasks yet.</div>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center gap-3 border-b px-6 py-4 last:border-b-0"
              >
                <button
                  onClick={() => onToggleComplete(task)}
                  title={task.completed ? "Mark as incomplete" : "Mark as done"}
                  className={`rounded-full border-2 w-5 h-5 flex items-center justify-center mr-2 ${
                    task.completed
                      ? "border-primary bg-primary"
                      : "border-muted"
                  }`}
                  aria-label={
                    task.completed ? "Completed" : "Mark as completed"
                  }
                  style={{ outline: "none" }}
                >
                  {task.completed ? (
                    <span className="block w-2 h-2 bg-white rounded-full"></span>
                  ) : null}
                </button>
                <div className="flex-1">
                  <div
                    className={`font-medium ${
                      task.completed ? "line-through text-muted-foreground" : ""
                    }`}
                  >
                    {task.title}
                  </div>
                  {task.description && (
                    <div className="text-sm text-muted-foreground">
                      {task.description}
                    </div>
                  )}
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onDelete(task.id)}
                  className="text-red-600"
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}