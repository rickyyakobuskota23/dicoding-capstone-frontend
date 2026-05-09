import { X } from "lucide-react";
import { Student, StudentFormData } from "@/types/student-management";
import { gradientOptions } from "@/data/student-management-data";

interface StudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  editingStudent: Student | null;
  formData: StudentFormData;
  setFormData: (data: StudentFormData) => void;
}

export const StudentModal = ({ isOpen, onClose, onSubmit, editingStudent, formData, setFormData }: StudentModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{editingStudent ? "Edit Student" : "Add New Student"}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition"><X className="w-6 h-6 text-gray-500" /></button>
        </div>

        <form onSubmit={onSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Class *</label>
                <input type="text" required value={formData.className} onChange={(e) => setFormData({ ...formData, className: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Grade Level *</label>
                <input type="text" required value={formData.grade} onChange={(e) => setFormData({ ...formData, grade: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Profile Color Theme</label>
              <div className="flex flex-wrap gap-3">
                {gradientOptions.map((gradient) => (
                  <button key={gradient} type="button" onClick={() => setFormData({ ...formData, color: gradient })} className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} ${formData.color === gradient ? "ring-4 ring-blue-100 scale-110" : "opacity-70 hover:opacity-100"} transition-all`} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button type="button" onClick={onClose} className="flex-1 px-6 py-3.5 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition">Cancel</button>
            <button type="submit" className="flex-1 px-6 py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">{editingStudent ? "Save Changes" : "Create Student"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};