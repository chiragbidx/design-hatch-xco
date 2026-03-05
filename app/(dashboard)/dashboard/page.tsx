import React from "react";

export const metadata = {
  title: "Dashboard – Tasklyst",
  description: "Your personal overview dashboard. Organize your workload, track progress, and manage your team with Tasklyst.",
};

export default function DashboardOverviewPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Welcome to Tasklyst</h2>
      <p className="text-muted-foreground mb-6">
        Your team’s unified dashboard for all tasks, deadlines, and collaboration. Tasklyst makes it easy to stay organized and hit your goals—together.
      </p>
      {/* Core dashboard widgets/components go here */}
    </div>
  );
}