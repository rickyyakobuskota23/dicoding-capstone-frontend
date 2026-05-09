export interface LearningData {
  subject: string;
  score: number;
  trend: "up" | "down" | "stable";
  lastAssessment: string;
}

export interface Student {
  id: number;
  name: string;
  avatar: string;
  email: string;
  classId: number;
  className: string;
  grade: string;
  learningPreferences: string[];
  strengths: string[];
  challenges: string[];
  progress: number;
  trend: "up" | "down" | "stable";
  learningData: LearningData[];
  notes: string;
  color: string;
}

export interface StudentFormData {
  name: string;
  email: string;
  className: string;
  grade: string;
  color: string;
}