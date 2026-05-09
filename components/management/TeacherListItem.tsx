import { Teacher } from "@/types/teacher-management";

interface TeacherListItemProps {
  teacher: Teacher;
  isSelected: boolean;
  onClick: () => void;
}

export const TeacherListItem = ({ teacher, isSelected, onClick }: TeacherListItemProps) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 p-3 rounded-lg transition ${
      isSelected
        ? "bg-blue-50 border border-blue-200"
        : "hover:bg-gray-50 border border-transparent"
    }`}
  >
    <div className={`w-12 h-12 bg-gradient-to-br ${teacher.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
      <span className="text-sm font-medium">{teacher.avatar}</span>
    </div>
    <div className="flex-1 min-w-0 text-left">
      <p className="text-sm font-semibold text-gray-900 truncate">{teacher.name}</p>
      <p className="text-xs text-gray-600">
        {teacher.classCount} {teacher.classCount === 1 ? "Class" : "Classes"} • {teacher.studentCount} Students
      </p>
    </div>
  </button>
);