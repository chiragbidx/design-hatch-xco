import React from "react";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "General Settings – Tasklyst",
  description: "Update your profile and workspace information for Tasklyst.",
};

export default function GeneralSettingsPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">General Settings</h2>
      <p className="text-muted-foreground mb-6">
        Update your account and team information. Keep your details current for a better Tasklyst experience.
      </p>
      <Card className="p-6">
        {/* Profile and workspace update form/components go here */}
        <p className="text-muted-foreground">Feature coming soon: Manage your Tasklyst user profile and workspace details here!</p>
      </Card>
    </div>
  );
}