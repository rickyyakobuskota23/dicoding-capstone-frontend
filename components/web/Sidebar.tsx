"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  X,
  LayoutDashboard,
  FileText,
  Sparkles,
  LayoutGrid,
  School,
  UserCheck,
  UsersRound,
  Users,
  BarChart3,
  Library,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {Show, UserButton} from "@clerk/nextjs";

const navItems = [
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/dashboard/lesson-plans", label: "My Lesson Plans", icon: FileText },
  { path: "/dashboard/ai-generator", label: "AI Lesson Generator", icon: Sparkles },
  {
    type: "section",
    label: "Management",
    items: [
      { path: "/dashboard/management-overview", label: "Overview", icon: LayoutGrid },
      { path: "/dashboard/class-management", label: "Classes", icon: School },
      { path: "/dashboard/teacher-management", label: "Teachers", icon: UserCheck },
      { path: "/dashboard/student-management", label: "Students", icon: UsersRound },
    ]
  },
  { path: "/dashboard/student-profiles", label: "Student Profiles", icon: Users },
  { path: "/dashboard/analytics", label: "Learning Analytics", icon: BarChart3 },
  { path: "/dashboard/resources", label: "Resource Library", icon: Library },
  { path: "/dashboard/settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 w-64 bg-card border-r border-border flex flex-col z-50 transform transition-transform lg:transform-none",
        open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-border">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-9 h-9 dark:bg-blue-400 bg-linear-to-br from-blue-700 to accent-blue-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground tracking-tight"> DI Learning Studio</span>
          </Link>

          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setOpen(false)}
            className="lg:hidden hover:cursor-pointer"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="flex-1 px-3 py-6 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item, index) => {
              if (item.type === "section" && "items" in item) {
                return (
                  <li key={`section-${index}`} className="mb-4">
                    <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </div>
                    <ul className="space-y-1 mt-1">
                      {item.items.map((subItem) => (
                        <NavItem key={subItem.path} item={subItem} active={pathname === subItem.path} />
                      ))}
                    </ul>
                  </li>
                );
              }
              return <NavItem key={item.path} item={item} active={pathname === item.path} />;
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <Show when="signed-in">
              <UserButton />
            </Show>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">Jane Doe</p>
              <p className="text-xs text-muted-foreground truncate">Grade 5 Teacher</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function NavItem({ item, active }: { item: any; active: boolean }) {
  return (
    <li>
      <Link
        href={item.path}
        className={cn(
          "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium",
          active
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
      >
        <item.icon className="w-5 h-5" />
        <span>{item.label}</span>
      </Link>
    </li>
  );
}