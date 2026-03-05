"use server";

import { createTaskSchema, updateTaskSchema } from "@/lib/validators";
import {
  getTasksForUser,
  createTask,
  updateTask,
  deleteTask,
  Task,
} from "@/lib/db/queries";
import { validatedActionWithUser } from "@/lib/auth/middleware";

export const fetchUserTasks = validatedActionWithUser(async ({ user }) => {
  const tasks = await getTasksForUser(user.id);
  return { tasks };
});

export const createTaskAction = validatedActionWithUser(async ({ formData, user }) => {
  const data = createTaskSchema.safeParse(Object.fromEntries(formData));
  if (!data.success) return { error: data.error.errors[0]?.message || "Invalid data" };

  const task = await createTask({
    title: data.data.title,
    description: data.data.description || "",
    userId: user.id,
    teamId: user.teamId || null,
    completed: false,
  });
  return { task };
});

export const updateTaskAction = validatedActionWithUser(async ({ formData, user }) => {
  const data = updateTaskSchema.safeParse(Object.fromEntries(formData));
  if (!data.success) return { error: data.error.errors[0]?.message || "Invalid data" };

  const updatedTask = await updateTask(
    data.data.id,
    user.id,
    {
      title: data.data.title,
      description: data.data.description,
      completed: data.data.completed,
    }
  );
  return { task: updatedTask };
});

export const deleteTaskAction = validatedActionWithUser(async ({ formData, user }) => {
  const id = Number(formData.get("id"));
  if (isNaN(id)) return { error: "Invalid task id" };

  await deleteTask(id, user.id);
  return { success: true };
});