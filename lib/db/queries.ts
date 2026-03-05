import { db } from "./drizzle";
import { tasks, Task, NewTask } from "./schema";
import { eq, and } from "drizzle-orm";

// ...existing imports and exports...

export async function getTasksForUser(userId: number) {
  return db.select().from(tasks).where(eq(tasks.userId, userId));
}

export async function getTasksForTeam(teamId: number) {
  return db.select().from(tasks).where(eq(tasks.teamId, teamId));
}

export async function getTaskById(taskId: number, userId: number) {
  // Ownership enforced
  return db.select().from(tasks)
    .where(and(eq(tasks.id, taskId), eq(tasks.userId, userId)))
    .then(rows => rows[0] || null);
}

export async function createTask(newTask: NewTask) {
  return db.insert(tasks)
    .values({ ...newTask })
    .returning()
    .then(rows => rows[0]);
}

export async function updateTask(taskId: number, userId: number, updates: Partial<NewTask>) {
  return db.update(tasks)
    .set({ ...updates, updatedAt: new Date() })
    .where(and(eq(tasks.id, taskId), eq(tasks.userId, userId)))
    .returning()
    .then(rows => rows[0]);
}

export async function deleteTask(taskId: number, userId: number) {
  return db.delete(tasks)
    .where(and(eq(tasks.id, taskId), eq(tasks.userId, userId)));
}

// ...keep existing exports