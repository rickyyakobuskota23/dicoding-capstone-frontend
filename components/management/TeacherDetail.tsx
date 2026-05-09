import { Edit2, Trash2, Mail, Phone, BookOpen, UserCheck } from "lucide-react";
import { Teacher } from "@/types/teacher-management";

interface TeacherDetailProps {
  teacher: Teacher | null;
  onEdit: (teacher: Teacher) => void;
  onDelete: (id: number) => void;
}

export const TeacherDetail = ({ teacher, onEdit, onDelete }: TeacherDetailProps) => {
  if (!teacher) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center max-w-md px-8">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <UserCheck className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-xl text-gray-900 mb-2">Select a Teacher</h2>
          <p className="text-gray-600">Choose a teacher from the list to view their details and class assignments</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-6">
            <div className={`w-24 h-24 bg-gradient-to-br ${teacher.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}>
              <span className="text-3xl font-bold">{teacher.avatar}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{teacher.name}</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{teacher.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{teacher.phone}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => onEdit(teacher)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"><Edit2 className="w-5 h-5" /></button>
            <button onClick={() => onDelete(teacher.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"><Trash2 className="w-5 h-5" /></button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-xs text-blue-600 mb-1 font-medium">Classes</p>
            <p className="text-2xl font-bold text-gray-900">{teacher.classCount}</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
            <p className="text-xs text-purple-600 mb-1 font-medium">Students</p>
            <p className="text-2xl font-bold text-gray-900">{teacher.studentCount}</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-100">
            <p className="text-xs text-green-600 mb-1 font-medium">Subjects</p>
            <p className="text-2xl font-bold text-gray-900">{teacher.subjects.length}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Subjects</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {teacher.subjects.map((subject, index) => (
            <span key={index} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm border border-blue-100">{subject}</span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Assigned Classes</h3>
        <div className="space-y-3">
          {teacher.classes.map((className, index) => (
            <div key={index} className="p-4 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between">
              <span className="text-gray-900 font-medium">{className}</span>
            </div>
          ))}
          {teacher.classes.length === 0 && <p className="text-sm text-gray-600 text-center py-4">No classes assigned yet</p>}
        </div>
      </div>
    </div>
  );
};