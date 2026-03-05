import {
  pgTable,
  serial,
  text,
  boolean,
  timestamp,
  integer,
  primaryKey,
  foreignKey,
} from "drizzle-orm/pg-core";

// ...existing tables...

// Task table

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey().notNull(),
  title: text("title").notNull(),
  description: text("description"),
  completed: boolean("completed").default(false).notNull(),
  userId: integer("user_id").notNull(),
  teamId: integer("team_id"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

// Types
export type Task = typeof tasks.$inferSelect;
export type NewTask = typeof tasks.$inferInsert;

// --- Export all existing tables and types below ---
// Example (add your other exports here):
// export { users, teams, teamMembers, activityLogs, ActivityType, ... }
// export type { User, Team, ... }

// Explicit export for all statically known entities
export {
  tasks, // NEWLY ADDED
  // ...existing table exports (users, teams, teamMembers, activityLogs, etc.)
};

// Optionally, if you export types statically as well:
export type {
  Task, // NEWLY ADDED
  NewTask, // NEWLY ADDED
  // ...existing type exports (User, Team, etc.)
};