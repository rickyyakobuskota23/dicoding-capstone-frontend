'use client'

import { useState } from "react";
import { Plus, Search, Users } from "lucide-react";
import { Class, ClassFormData } from "@/types/class-management";
import { initialClasses, teachers } from "@/data/class-management-data";
import { ClassCard } from "@/components/management/ClassCard";
import { ClassModal } from "@/components/management/ClassModal";

export default function ClassManagement() {
  const [classes, setClasses] = useState<Class[]>(initialClasses);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClass, setEditingClass] = useState<Class | null>(null);
  const [formData, setFormData] = useState<ClassFormData>({
    name: "", grade: "", subject: "", period: "", teacherId: 0, color: "blue",
  });

  const filteredClasses = classes.filter(cls =>
    cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cls.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cls.teacherName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = (cls?: Class) => {
    if (cls) {
      setEditingClass(cls);
      setFormData({ ...cls });
    } else {
      setEditingClass(null);
      setFormData({ name: "", grade: "", subject: "", period: "", teacherId: 0, color: "blue" });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const teacher = teachers.find((t) => t.id === formData.teacherId);
    if (editingClass) {
      setClasses(classes.map(c => c.id === editingClass.id ? { ...c, ...formData, teacherName: teacher?.name || "" } : c));
    } else {
      setClasses([...classes, { id: Date.now(), ...formData, teacherName: teacher?.name || "", studentCount: 0 }]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure?")) setClasses(classes.filter(c => c.id !== id));
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl text-gray-900 mb-2 font-bold">Class Management</h1>
            <p className="text-gray-600">Manage your classes and teacher assignments</p>
          </div>
          <button onClick={() => handleOpenModal()} className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg">
            <Plus className="w-5 h-5" /> Add Class
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search classes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((cls) => (
          <ClassCard key={cls.id} cls={cls} onEdit={handleOpenModal} onDelete={handleDelete} />
        ))}
      </div>

      {filteredClasses.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600">No classes found</p>
        </div>
      )}

      <ClassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        editingClass={editingClass}
        formData={formData}
        setFormData={setFormData}
        teachers={teachers}
      />
    </div>
  );
}