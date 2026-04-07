export type LessonPlanStatus = "active" | "completed" | "draft";

export type LessonPlanSubjectColor =
  | "blue"
  | "purple"
  | "green"
  | "orange"
  | "pink";

export interface LessonPlan {
  id: string;
  title: string;
  subject: string;
  grade: string;
  date: string;
  studentsCount: number;
  status: LessonPlanStatus;
  color: LessonPlanSubjectColor;
}

export interface LessonPlanStat {
  label: string;
  value: number;
}