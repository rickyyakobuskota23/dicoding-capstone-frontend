export interface Class {
  id: number;
  name: string;
  grade: string;
  subject: string;
  period: string;
  teacherId: number;
  teacherName: string;
  studentCount: number;
  color: string;
}

export interface Teacher {
  id: number;
  name: string;
}

export interface ClassFormData {
  name: string;
  grade: string;
  subject: string;
  period: string;
  teacherId: number;
  color: string;
}