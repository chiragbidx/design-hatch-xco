import React from "react";

export const metadata = {
  title: "Activity Log – Tasklyst",
  description: "Monitor all recent activity in your Tasklyst workspace. Track changes, progress, and team collaboration in one place.",
};

export default function ActivityLogPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Workspace Activity Log</h2>
      <p className="text-muted-foreground mb-6">
        Keep track of all important activity across your team’s workspace in Tasklyst. Know who did what, when — and stay on top of task progress.
      </p>
      {/* Activity log UI goes here */}
    </div>
  );
}