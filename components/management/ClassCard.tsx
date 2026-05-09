import { Users, Edit2, Trash2, GraduationCap } from "lucide-react";
import { Class } from "@/types/class-management";
import { getColorClass } from "@/lib/class-management-utils";

interface ClassCardProps {
  cls: Class;
  onEdit: (cls: Class) => void;
  onDelete: (id: number) => void;
}

export const ClassCard = ({ cls, onEdit, onDelete }: ClassCardProps) => (
  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
    <div className={`h-2 ${getColorClass(cls.color)}`} />
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl text-gray-900 mb-1">{cls.name}</h3>
          <p className="text-sm text-gray-600">{cls.grade}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onEdit(cls)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(cls.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-700">{cls.subject}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-700">{cls.studentCount} students</span>
        </div>
        <div className="pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Teacher</p>
          <p className="text-sm text-gray-900">{cls.teacherName}</p>
        </div>
        <div className="pt-2">
          <p className="text-xs text-gray-600 mb-1">Period</p>
          <p className="text-sm text-gray-900">{cls.period}</p>
        </div>
      </div>
    </div>
  </div>
);