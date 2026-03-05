-- Migration: Add tasks table

CREATE TABLE IF NOT EXISTS "tasks" (
    "id" serial PRIMARY KEY,
    "title" text NOT NULL,
    "description" text,
    "completed" boolean NOT NULL DEFAULT false,
    "user_id" integer NOT NULL,
    "team_id" integer,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz NOT NULL DEFAULT now(),
    CONSTRAINT fk_user FOREIGN KEY("user_id") REFERENCES "users"("id"),
    CONSTRAINT fk_team FOREIGN KEY("team_id") REFERENCES "teams"("id")
);