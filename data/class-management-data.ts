import { Class, Teacher } from "@/types/class-management";

export const initialClasses: Class[] = [
  {
    id: 1,
    name: "5A",
    grade: "5th Grade",
    subject: "All Subjects",
    period: "Morning",
    teacherId: 1,
    teacherName: "Ms. Sarah Johnson",
    studentCount: 24,
    color: "blue",
  },
  {
    id: 2,
    name: "5B",
    grade: "5th Grade",
    subject: "All Subjects",
    period: "Afternoon",
    teacherId: 2,
    teacherName: "Mr. David Martinez",
    studentCount: 22,
    color: "purple",
  },
  {
    id: 3,
    name: "Math Advanced",
    grade: "5th Grade",
    subject: "Mathematics",
    period: "Period 3",
    teacherId: 3,
    teacherName: "Dr. Emily Chen",
    studentCount: 18,
    color: "green",
  },
];

export const teachers: Teacher[] = [
  { id: 1, name: "Ms. Sarah Johnson" },
  { id: 2, name: "Mr. David Martinez" },
  { id: 3, name: "Dr. Emily Chen" },
  { id: 4, name: "Ms. Rachel Thompson" },
  { id: 5, name: "Mr. James Wilson" },
];

export const colorOptions = [
  { value: "blue", class: "bg-blue-500" },
  { value: "purple", class: "bg-purple-500" },
  { value: "green", class: "bg-green-500" },
  { value: "orange", class: "bg-orange-500" },
  { value: "pink", class: "bg-pink-500" },
  { value: "indigo", class: "bg-indigo-500" },
];