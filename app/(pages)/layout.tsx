"use client";

import { useState } from "react";
import {Sidebar} from "@/components/web/Sidebar";
import { Navbar } from "@/components/web/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-auto bg-muted/10">
          <div className="container mx-auto p-4 lg:p-8">
             {children}
          </div>
        </main>
      </div>
    </div>
  );
}