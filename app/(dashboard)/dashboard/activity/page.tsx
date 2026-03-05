import React from "react";

export const metadata = {
  title: "Activity Log – Tasklyst",
  description: "Monitor workspace activity, track changes, and keep your Tasklyst team on the same page.",
};

export default function ActivityLogPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Workspace Activity Log</h2>
      <p className="text-muted-foreground mb-6">
        Stay up to date with everything happening in your Tasklyst workspace. Review recent updates, completed tasks, and collaborative activity in real time.
      </p>
      {/* Activity log UI will render here */}
    </div>
  );
}