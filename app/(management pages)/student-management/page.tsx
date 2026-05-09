'use client'

import { useState } from "react";
import { Users, Plus, Search } from "lucide-react";
import { Student, StudentFormData } from "@/types/student-management";
import { initialStudents } from "@/data/student-management-data";
import { StudentListItem } from "@/components/management/StudentListItem";
import { StudentDetail } from "@/components/management/StudentDetail";
import { StudentModal } from "@/components/management/StudentModal";

export default function StudentManagement() {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [formData, setFormData] = useState<StudentFormData>({
    name: "", email: "", className: "", grade: "", color: "from-blue-500 to-blue-600",
  });

  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.className.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = (student?: Student) => {
    if (student) {
      setEditingStudent(student);
      setFormData({ ...student });
    } else {
      setEditingStudent(null);
      setFormData({ name: "", email: "", className: "", grade: "", color: "from-blue-500 to-blue-600" });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const avatar = formData.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
    if (editingStudent) {
      const updated = { ...editingStudent, ...formData, avatar };
      setStudents(students.map(s => s.id === editingStudent.id ? updated : s));
      if (selectedStudent?.id === editingStudent.id) setSelectedStudent(updated);
    } else {
      setStudents([...students, { 
        id: Date.now(), ...formData, avatar, classId: 1, progress: 0, trend: "stable", 
        learningPreferences: [], strengths: [], challenges: [], learningData: [], notes: "" 
      }]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure?")) {
      setStudents(students.filter(s => s.id !== id));
      if (selectedStudent?.id === id) setSelectedStudent(null);
    }
  };

  const handleUpdateNotes = (updatedStudent: Student) => {
    setStudents(students.map(s => s.id === updatedStudent.id ? updatedStudent : s));
    setSelectedStudent(updatedStudent);
  };

  return (
    <div className="flex flex-col lg:flex-row -m-4 lg:-m-6 h-[calc(100vh-120px)] overflow-hidden">
      {/* Sidebar List */}
      <div className="lg:w-96 bg-white border-b lg:border-r border-gray-200 flex flex-col min-h-0">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Students</h1>
            </div>
            <button onClick={() => handleOpenModal()} className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {filteredStudents.map(student => (
            <StudentListItem 
              key={student.id} 
              student={student} 
              isSelected={selectedStudent?.id === student.id} 
              onClick={() => setSelectedStudent(student)} 
            />
          ))}
          {filteredStudents.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-sm text-gray-500">No students found</p>
            </div>
          )}
        </div>
      </div>

      {/* Detail Area */}
      <div className="flex-1 overflow-y-auto bg-muted/5">
        <StudentDetail 
          student={selectedStudent} 
          onEdit={handleOpenModal} 
          onDelete={handleDelete}
          onUpdateNotes={handleUpdateNotes}
        />
      </div>

      <StudentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        editingStudent={editingStudent}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}