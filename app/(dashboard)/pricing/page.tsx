import React from "react";

export const metadata = {
  title: "Pricing & Plans – Tasklyst",
  description: "Simple, transparent pricing to help your team grow. Choose the Tasklyst plan that fits your workflow.",
};

export default function PricingPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Tasklyst Plans</h2>
      <p className="text-muted-foreground mb-8">
        Pick a plan that fits your team’s needs. Whether you’re just getting started or scaling your operations, Tasklyst is flexible for any workflow.
      </p>
      {/* Pricing cards/components go here */}
    </div>
  );
}