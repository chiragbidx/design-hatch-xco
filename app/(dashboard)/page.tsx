import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Terminal from "./terminal";

export const metadata = {
  title: "Tasklyst – Effortless Task Management for Teams",
  description: "Tasklyst helps teams organize, prioritize, and track work in one place. Manage tasks, achieve goals, and boost productivity with our secure, enterprise-ready SaaS solution.",
  openGraph: {
    title: "Tasklyst – Effortless Task Management for Teams",
    description:
      "Organize work, manage projects, and stay productive. Tasklyst is your enterprise-grade solution for efficient, secure team task management."
  }
};

export default function Page() {
  return (
    <section className="py-16 md:py-28">
      <div className="container mx-auto flex flex-col gap-12 items-center">
        <div className="flex flex-col gap-6 max-w-2xl text-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Master Your Team’s Workflow with <span className="text-primary">Tasklyst</span>
          </h1>
          <p className="md:text-lg text-muted-foreground">
            Tasklyst streamlines task management for modern teams. Assign, track, and complete work with clarity and security — all in one collaborative platform built for productivity.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild size="lg" className="px-8 py-5">
            <Link href="/sign-up">
              Get Started Free
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="px-8 py-5">
            <Link href="/sign-in">
              Sign In
            </Link>
          </Button>
        </div>
        <div className="w-full max-w-4xl mt-10">
          <Terminal
            lines={[
              "Welcome to Tasklyst.",
              "✔️  Create tasks for your latest project",
              "✔️  Assign tasks to teammates instantly",
              "✔️  Track progress and hit your team’s goals",
              "Ready to boost productivity? Sign up now!"
            ]}
          />
        </div>
        <div className="flex flex-wrap justify-center max-w-3xl gap-4 mt-8 text-sm md:text-base">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-xl">
            🛡️ Enterprise-Grade Security
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-xl">
            📋 Collaborative Task Management
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-xl">
            🚀 Team Productivity Insights
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-xl">
            💡 Simple & Intuitive UI
          </span>
        </div>
      </div>
    </section>
  );
}