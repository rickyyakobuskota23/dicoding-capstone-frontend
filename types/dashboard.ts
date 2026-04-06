import type { LucideIcon } from "lucide-react";

export type StatBadgeTone = "success" | "info" | "warning" | "secondary";

export interface DashboardStat {
  title: string;
  value: string;
  badge: string;
  badgeTone: StatBadgeTone;
  icon: LucideIcon;
  iconBgClass: string;
  iconClass: string;
}

export interface EngagementPoint {
  day: string;
  engagement: number;
}

export interface ProgressPoint {
  subject: string;
  progress: number;
}

export interface TeachingPlan {
  id: string;
  time: string;
  title: string;
  students: number;
  type: string;
  href: string;
}

export interface RecentLesson {
  id: string;
  title: string;
  subject: string;
  grade: string;
  date: string;
  status: string;
  href: string;
}

export interface AiSuggestion {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ClassOverviewItem {
  id: string;
  name: string;
  students: number;
  avgProgress: number;
  colorClass: string;
}

export interface DashboardData {
  greetingName: string;
  greetingTitle: string;
  greetingSubtitle: string;
  stats: DashboardStat[];
  engagementData: EngagementPoint[];
  progressData: ProgressPoint[];
  todayPlans: TeachingPlan[];
  recentLessons: RecentLesson[];
  aiSuggestions: AiSuggestion[];
  classes: ClassOverviewItem[];
}