import React from "react";

export const metadata = {
  title: "Security – Tasklyst",
  description: "Manage your account security settings. Update password, enable additional protection, and keep your Tasklyst account secure.",
};

export default function SecuritySettingsPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Security Settings</h2>
      <p className="text-muted-foreground mb-6">
        Your Tasklyst account is protected with enterprise-grade security. Update your password below or reach out if you have any concerns about account safety.
      </p>
      {/* Security form/component UI goes here */}
    </div>
  );
}