import { z } from "zod";

// ...existing validators...

export const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  description: z.string().max(500).optional(),
});

export const updateTaskSchema = z.object({
  id: z.number(),
  title: z.string().min(1, "Title is required").max(100),
  description: z.string().max(500).optional(),
  completed: z.boolean().optional(),
});