import React from "react";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden md:flex flex-col min-w-[220px] border-r bg-background px-6 py-8 gap-4">
        <div className="mb-8 flex items-center gap-2">
          <span className="font-bold text-lg tracking-tight text-primary">Tasklyst</span>
        </div>
        <nav className="flex flex-col gap-2">
          <Link href="/dashboard" className="font-medium hover:text-primary transition">
            Overview
          </Link>
          <Link href="/dashboard/tasks" className="font-medium hover:text-primary transition">
            Tasks
          </Link>
          <Link href="/dashboard/general" className="font-medium hover:text-primary transition">
            Team Settings
          </Link>
          <Link href="/dashboard/activity" className="font-medium hover:text-primary transition">
            Activity Log
          </Link>
          <Link href="/dashboard/security" className="font-medium hover:text-primary transition">
            Security
          </Link>
          <Link href="/dashboard/pricing" className="font-medium hover:text-primary transition">
            Billing & Plans
          </Link>
        </nav>
        <div className="mt-auto flex items-center gap-2">
          <Avatar />
          <div>
            <div className="text-sm font-medium">Chirag Dodiya</div>
            <a href="mailto:hi@chirag.co" className="text-xs text-muted-foreground underline">
              hi@chirag.co
            </a>
          </div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col min-h-screen">
        {children}
      </main>
    </div>
  );
}