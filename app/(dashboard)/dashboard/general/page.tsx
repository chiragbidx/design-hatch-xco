import React from "react";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Team Settings – Tasklyst",
  description: "Manage your team’s details, contact support, and update your Tasklyst workspace information.",
};

export default function TeamSettingsPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Team Settings</h2>
      <Card className="mb-6">
        <div className="p-6 space-y-2">
          <div>
            <span className="block text-muted-foreground mb-1">Workspace:</span>
            <span className="font-medium">Tasklyst</span>
          </div>
          <div>
            <span className="block text-muted-foreground mb-1">Owner:</span>
            <span className="font-medium">Chirag Dodiya</span>
          </div>
          <div>
            <span className="block text-muted-foreground mb-1">Contact Email:</span>
            <a className="font-medium text-primary underline" href="mailto:hi@chirag.co">
              hi@chirag.co
            </a>
          </div>
        </div>
      </Card>
      <Card>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-1">Need help?</h3>
          <p className="text-muted-foreground mb-4">
            For support, questions, or feedback about Tasklyst, email us any time.
          </p>
          <a className="inline-block bg-primary text-white px-4 py-2 rounded transition hover:brightness-110" href="mailto:hi@chirag.co">
            Contact Support
          </a>
        </div>
      </Card>
    </div>
  );
}