import { School, UserCheck, UsersRound, Users, TrendingUp } from "lucide-react";
import { ManagementSection, QuickStat, RecentActivity } from "@/types/management";

export const managementSections: ManagementSection[] = [
  {
    id: "class",
    title: "Class Management",
    description: "Organize classes, assign teachers, and track student enrollment",
    icon: School,
    path: "/dashboard/class-management",
    color: "blue",
    stats: [
      { label: "Total Classes", value: "12" },
      { label: "Active", value: "12" },
    ],
  },
  {
    id: "teacher",
    title: "Teacher Management",
    description: "Manage teacher profiles, class assignments, and subject specializations",
    icon: UserCheck,
    path: "/dashboard/teacher-management",
    color: "purple",
    stats: [
      { label: "Total Teachers", value: "8" },
      { label: "Active", value: "8" },
    ],
  },
  {
    id: "student",
    title: "Student Management",
    description: "Track student data, learning progress, and individual profiles",
    icon: UsersRound,
    path: "/dashboard/student-management",
    color: "green",
    stats: [
      { label: "Total Students", value: "246" },
      { label: "Active", value: "242" },
    ],
  },
];

export const quickStats: QuickStat[] = [
  {
    label: "Total Classes",
    value: "12",
    icon: School,
    color: "blue",
    trend: "+2 this semester",
  },
  {
    label: "Teachers",
    value: "8",
    icon: UserCheck,
    color: "purple",
    trend: "100% active",
  },
  {
    label: "Students Enrolled",
    value: "246",
    icon: Users,
    color: "green",
    trend: "+12 this month",
  },
  {
    label: "Avg. Class Size",
    value: "20.5",
    icon: TrendingUp,
    color: "orange",
    trend: "Optimal range",
  },
];

export const recentActivities: RecentActivity[] = [
  {
    type: "student",
    action: "New student added",
    details: "Emma Rodriguez joined Class 5A",
    time: "2 hours ago",
  },
  {
    type: "class",
    action: "Class created",
    details: "Math Advanced (Period 3) created",
    time: "5 hours ago",
  },
  {
    type: "teacher",
    action: "Teacher assignment",
    details: "Dr. Emily Chen assigned to Science Lab",
    time: "1 day ago",
  },
];