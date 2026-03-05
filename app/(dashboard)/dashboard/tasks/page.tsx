import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Tasks – Tasklyst",
  description: "Manage, organize, and complete your team's tasks in Tasklyst.",
};

export default function TasksPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <p className="text-muted-foreground mb-6">
        Create, assign, and track tasks for your team, all in one place.
      </p>
      <Card className="p-6">
        <p className="mb-4">The task management system is coming soon to Tasklyst!</p>
        {/* Task list, creation form, and actions will be implemented here */}
        {/* Example CTA below (temporary): */}
        <Link
          href="#"
          className="inline-block bg-primary text-white px-5 py-2 rounded hover:brightness-110 transition"
        >
          Start Planning Your Tasks
        </Link>
      </Card>
    </div>
  );
}