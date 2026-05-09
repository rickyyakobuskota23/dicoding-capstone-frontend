'use client'

import { useState } from "react";
import { UserCheck, Plus, Search } from "lucide-react";
import { Teacher, TeacherFormData } from "@/types/teacher-management";
import { initialTeachers } from "@/data/teacher-management-data";
import { TeacherListItem } from "@/components/management/TeacherListItem";
import { TeacherDetail } from "@/components/management/TeacherDetail";
import { TeacherModal } from "@/components/management/TeacherModal";

export default function TeacherManagement() {
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);
  const [formData, setFormData] = useState<TeacherFormData>({
    name: "", email: "", phone: "", subjects: [], classes: [], color: "from-blue-500 to-blue-600",
  });

  const filteredTeachers = teachers.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.subjects.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleOpenModal = (teacher?: Teacher) => {
    if (teacher) {
      setEditingTeacher(teacher);
      setFormData({ ...teacher });
    } else {
      setEditingTeacher(null);
      setFormData({ name: "", email: "", phone: "", subjects: [], classes: [], color: "from-blue-500 to-blue-600" });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const avatar = formData.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
    if (editingTeacher) {
      const updated = { ...editingTeacher, ...formData, avatar, classCount: formData.classes.length };
      setTeachers(teachers.map(t => t.id === editingTeacher.id ? updated : t));
      if (selectedTeacher?.id === editingTeacher.id) setSelectedTeacher(updated);
    } else {
      setTeachers([...teachers, { id: Date.now(), ...formData, avatar, classCount: formData.classes.length, studentCount: 0 }]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure?")) {
      setTeachers(teachers.filter(t => t.id !== id));
      if (selectedTeacher?.id === id) setSelectedTeacher(null);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row -m-4 lg:-m-6 h-[calc(100vh-120px)] overflow-hidden">
      {/* Sidebar List */}
      <div className="lg:w-96 bg-white border-b lg:border-r border-gray-200 flex flex-col min-h-0">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Teachers</h1>
            </div>
            <button onClick={() => handleOpenModal()} className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search teachers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {filteredTeachers.map(teacher => (
            <TeacherListItem 
              key={teacher.id} 
              teacher={teacher} 
              isSelected={selectedTeacher?.id === teacher.id} 
              onClick={() => setSelectedTeacher(teacher)} 
            />
          ))}
        </div>
      </div>

      {/* Detail Area */}
      <div className="flex-1 overflow-y-auto bg-muted/5">
        <TeacherDetail 
          teacher={selectedTeacher} 
          onEdit={handleOpenModal} 
          onDelete={handleDelete} 
        />
      </div>

      <TeacherModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        editingTeacher={editingTeacher}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}