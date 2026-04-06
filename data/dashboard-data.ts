import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import type { DashboardData } from "@/types/dashboard";

export const dashboardData: DashboardData = {
  greetingName: "Jane",
  greetingTitle: "Good morning",
  greetingSubtitle: "Here's what's happening with your class-management today.",
  stats: [
    {
      title: "Active Lesson Plans",
      value: "32",
      badge: "+12%",
      badgeTone: "success",
      icon: BookOpen,
      iconBgClass: "bg-blue-50",
      iconClass: "text-blue-600",
    },
    {
      title: "Students",
      value: "46",
      badge: "46 total",
      badgeTone: "info",
      icon: Users,
      iconBgClass: "bg-purple-50",
      iconClass: "text-purple-600",
    },
    {
      title: "Avg Engagement",
      value: "86%",
      badge: "+5%",
      badgeTone: "success",
      icon: TrendingUp,
      iconBgClass: "bg-green-50",
      iconClass: "text-green-600",
    },
    {
      title: "AI-Generated Plans",
      value: "8",
      badge: "This week",
      badgeTone: "secondary",
      icon: Sparkles,
      iconBgClass: "bg-orange-50",
      iconClass: "text-orange-600",
    },
  ],
  engagementData: [
    { day: "Mon", engagement: 75 },
    { day: "Tue", engagement: 82 },
    { day: "Wed", engagement: 78 },
    { day: "Thu", engagement: 85 },
    { day: "Fri", engagement: 88 },
  ],
  progressData: [
    { subject: "Math", progress: 85 },
    { subject: "Reading", progress: 92 },
    { subject: "Science", progress: 78 },
    { subject: "Social", progress: 88 },
  ],
  todayPlans: [
    {
      id: "plan-1",
      time: "9:00 AM",
      title: "Math - Fractions",
      students: 24,
      type: "Differentiated",
      href: "/dashboard/lesson-plans/plan-1",
    },
    {
      id: "plan-2",
      time: "10:30 AM",
      title: "Reading Comprehension",
      students: 24,
      type: "Group Work",
      href: "/dashboard/lesson-plans/plan-2",
    },
    {
      id: "plan-3",
      time: "1:00 PM",
      title: "Science - Ecosystems",
      students: 24,
      type: "Hands-on",
      href: "/dashboard/lesson-plans/plan-3",
    },
  ],
  recentLessons: [
    {
      id: "lesson-1",
      title: "Introduction to Fractions",
      subject: "Math",
      grade: "Grade 5",
      date: "2 days ago",
      status: "Completed",
      href: "/dashboard/lesson-plans/lesson-1",
    },
    {
      id: "lesson-2",
      title: "Story Elements",
      subject: "Reading",
      grade: "Grade 5",
      date: "4 days ago",
      status: "Completed",
      href: "/dashboard/lesson-plans/lesson-2",
    },
    {
      id: "lesson-3",
      title: "Plant Life Cycles",
      subject: "Science",
      grade: "Grade 5",
      date: "1 week ago",
      status: "Completed",
      href: "/dashboard/lesson-plans/lesson-3",
    },
  ],
  aiSuggestions: [
    {
      id: "suggestion-1",
      title: "Add Visual Aids for Math Learners",
      description:
        "3 student-management would benefit from graphic organizers in fraction lessons.",
      icon: "📊",
    },
    {
      id: "suggestion-2",
      title: "Reading Level Adjustment",
      description:
        "Consider tiered reading materials for the upcoming comprehension unit.",
      icon: "📚",
    },
    {
      id: "suggestion-3",
      title: "Hands-on Science Activities",
      description:
        "Kinesthetic learners could benefit from more lab-based activities.",
      icon: "🔬",
    },
  ],
  classes: [
    {
      id: "class-5a",
      name: "Class 5A",
      students: 24,
      avgProgress: 85,
      colorClass: "from-blue-500 to-blue-600",
    },
    {
      id: "class-5b",
      name: "Class 5B",
      students: 22,
      avgProgress: 88,
      colorClass: "from-purple-500 to-purple-600",
    },
  ],
};