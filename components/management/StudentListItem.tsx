import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Student } from "@/types/student-management";

interface StudentListItemProps {
  student: Student;
  isSelected: boolean;
  onClick: () => void;
}

export const StudentListItem = ({ student, isSelected, onClick }: StudentListItemProps) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 p-3 rounded-lg transition ${
      isSelected
        ? "bg-blue-50 border border-blue-200"
        : "hover:bg-gray-50 border border-transparent"
    }`}
  >
    <div className={`w-12 h-12 bg-gradient-to-br ${student.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
      <span className="text-sm font-medium">{student.avatar}</span>
    </div>
    <div className="flex-1 min-w-0 text-left">
      <p className="text-sm font-semibold text-gray-900 truncate">{student.name}</p>
      <p className="text-xs text-gray-600">Class {student.className}</p>
    </div>
    <div className="flex flex-col items-end gap-1">
      <span className="text-xs font-medium text-gray-900">{student.progress}%</span>
      {student.trend === "up" && <TrendingUp className="w-3 h-3 text-green-600" />}
      {student.trend === "down" && <TrendingDown className="w-3 h-3 text-red-600" />}
      {student.trend === "stable" && <Minus className="w-3 h-3 text-gray-400" />}
    </div>
  </button>
);