"use client";

import { Search, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import {Show, UserButton } from '@clerk/nextjs';
import {ModeToggle} from "@/components/web/theme-toggle";

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 lg:px-8 shrink-0">
      <Button
        variant="ghost"
        size="icon"
        onClick={onMenuClick}
        className="lg:hidden"
        aria-label="Open Menu"
      >
        <Menu className="w-6 h-6" />
      </Button>

      <div className="flex-1 max-w-xl mx-4">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search lesson plans, students..."
            className="w-full pl-10 pr-4 py-2 bg-muted/50  border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:bg-background transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button variant="outline" size="icon" className="relative hover:cursor-pointer" aria-label="notification">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-card"></span>
        </Button>

        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </header>
  );
}