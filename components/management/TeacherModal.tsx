import { X, Plus } from "lucide-react";
import { Teacher, TeacherFormData } from "@/types/teacher-management";
import { gradientOptions } from "@/data/teacher-management-data";
import { useState } from "react";

interface TeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  editingTeacher: Teacher | null;
  formData: TeacherFormData;
  setFormData: (data: TeacherFormData) => void;
}

export const TeacherModal = ({ isOpen, onClose, onSubmit, editingTeacher, formData, setFormData }: TeacherModalProps) => {
  const [subjectInput, setSubjectInput] = useState("");
  const [classInput, setClassInput] = useState("");

  if (!isOpen) return null;

  const addSubject = () => {
    if (subjectInput.trim() && !formData.subjects.includes(subjectInput.trim())) {
      setFormData({ ...formData, subjects: [...formData.subjects, subjectInput.trim()] });
      setSubjectInput("");
    }
  };

  const addClass = () => {
    if (classInput.trim() && !formData.classes.includes(classInput.trim())) {
      setFormData({ ...formData, classes: [...formData.classes, classInput.trim()] });
      setClassInput("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">{editingTeacher ? "Edit Teacher" : "Add New Teacher"}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition"><X className="w-5 h-5 text-gray-600" /></button>
        </div>

        <form onSubmit={onSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
            <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subjects</label>
            <div className="flex gap-2 mb-2">
              <input type="text" value={subjectInput} onChange={(e) => setSubjectInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSubject())} className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg" />
              <button type="button" onClick={addSubject} className="p-2.5 bg-blue-600 text-white rounded-lg"><Plus className="w-5 h-5" /></button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.subjects.map((s) => (
                <div key={s} className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm border border-blue-100">
                  {s} <button type="button" onClick={() => setFormData({...formData, subjects: formData.subjects.filter(item => item !== s)})}><X className="w-3 h-3"/></button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Avatar Color</label>
            <div className="flex flex-wrap gap-3">
              {gradientOptions.map((gradient) => (
                <button key={gradient} type="button" onClick={() => setFormData({ ...formData, color: gradient })} className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} ${formData.color === gradient ? "ring-2 ring-offset-2 ring-gray-900" : "opacity-60"}`} />
              ))}
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 px-4 py-2.5 bg-gray-100 rounded-lg">Cancel</button>
            <button type="submit" className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg">{editingTeacher ? "Save Changes" : "Add Teacher"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};