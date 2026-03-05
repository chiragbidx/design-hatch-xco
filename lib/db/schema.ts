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

// Relations (if applicable):
// - tasks.userId references users.id
// - tasks.teamId references teams.id

// Add foreign keys if you maintain them in drizzle schema
// (example, adjust as needed):

// export const tasks = pgTable("tasks", {
//   ...
//   userId: integer("user_id").notNull().references(() => users.id),
//   teamId: integer("team_id").references(() => teams.id),
//   ...
// }, (table) => ({
//   fk_user: foreignKey(() => ({
//     columns: [table.userId],
//     foreignColumns: [users.id],
//   })),
//   fk_team: foreignKey(() => ({
//     columns: [table.teamId],
//     foreignColumns: [teams.id],
//   })),
// }));

// Types

export type Task = typeof tasks.$inferSelect;
export type NewTask = typeof tasks.$inferInsert;

// ...keep other table/type exports intact