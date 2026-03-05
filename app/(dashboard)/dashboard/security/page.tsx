import React from "react";

export const metadata = {
  title: "Security Settings – Tasklyst",
  description: "Manage your Tasklyst account security. Update your password and account protection preferences.",
};

export default function SecuritySettingsPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Security Settings</h2>
      <p className="text-muted-foreground mb-6">
        Protect your Tasklyst account with modern security best practices. Change your password regularly, or contact support if you have concerns about account safety.
      </p>
      {/* Security form/component UI goes here */}
    </div>
  );
}