import { LucideIcon } from "lucide-react";

export interface Stat {
  label: string;
  value: string;
}

export interface ManagementSection {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  color: string;
  stats: Stat[];
}

export interface QuickStat {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
  trend: string;
}

export interface RecentActivity {
  type: "student" | "class" | "teacher";
  action: string;
  details: string;
  time: string;
}

export interface ColorClasses {
  bg: string;
  text: string;
  gradient: string;
  border: string;
}