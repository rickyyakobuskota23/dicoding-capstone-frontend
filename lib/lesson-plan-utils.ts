import type {
  LessonPlanStatus,
  LessonPlanSubjectColor,
} from "@/types/lesson-plan";

export function formatLessonPlanDate(date: string): string {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function getStatusBadgeStyles(status: LessonPlanStatus): string {
  switch (status) {
    case "active":
      return "border-green-200 bg-green-50 text-green-700";
    case "completed":
      return "border-slate-200 bg-slate-50 text-slate-700";
    case "draft":
      return "border-yellow-200 bg-yellow-50 text-yellow-700";
    default:
      return "border-slate-200 bg-slate-50 text-slate-700";
  }
}

export function getStatusLabel(status: LessonPlanStatus): string {
  switch (status) {
    case "active":
      return "Active";
    case "completed":
      return "Completed";
    case "draft":
      return "Draft";
    default:
      return status;
  }
}

export function getSubjectGradient(color: LessonPlanSubjectColor): string {
  switch (color) {
    case "blue":
      return "from-blue-500 to-blue-600";
    case "purple":
      return "from-purple-500 to-purple-600";
    case "green":
      return "from-green-500 to-green-600";
    case "orange":
      return "from-orange-500 to-orange-600";
    case "pink":
      return "from-pink-500 to-pink-600";
    default:
      return "from-slate-500 to-slate-600";
  }
}