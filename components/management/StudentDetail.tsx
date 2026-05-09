import { useState } from "react";
import { Edit2, Trash2, Users, TrendingUp, TrendingDown, Minus, BookOpen, Target, AlertCircle } from "lucide-react";
import { Student } from "@/types/student-management";

interface StudentDetailProps {
  student: Student | null;
  onEdit: (student: Student) => void;
  onDelete: (id: number) => void;
  onUpdateNotes: (student: Student) => void;
}

export const StudentDetail = ({ student, onEdit, onDelete, onUpdateNotes }: StudentDetailProps) => {
  const [activeTab, setActiveTab] = useState<"overview" | "data" | "notes">("overview");

  if (!student) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center max-w-md px-8">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Select a Student</h2>
          <p className="text-gray-600">Choose a student from the list to view and manage their learning data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-6">
            <div className={`w-24 h-24 bg-gradient-to-br ${student.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}>
              <span className="text-3xl font-bold">{student.avatar}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{student.name}</h2>
              <p className="text-gray-600 mb-1 font-medium">Class {student.className} • {student.grade}</p>
              <p className="text-sm text-gray-500">{student.email}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => onEdit(student)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"><Edit2 className="w-5 h-5" /></button>
            <button onClick={() => onDelete(student.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"><Trash2 className="w-5 h-5" /></button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex-1">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Overall Progress</span>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500" style={{ width: `${student.progress}%` }} />
              </div>
              <span className="text-sm font-bold text-gray-900">{student.progress}%</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-100">
            {student.trend === "up" && <><TrendingUp className="w-4 h-4 text-green-600" /><span className="text-sm font-medium text-green-600">Improving</span></>}
            {student.trend === "down" && <><TrendingDown className="w-4 h-4 text-red-600" /><span className="text-sm font-medium text-red-600">Needs Support</span></>}
            {student.trend === "stable" && <><Minus className="w-4 h-4 text-gray-500" /><span className="text-sm font-medium text-gray-600">Stable</span></>}
          </div>
        </div>
      </div>

      {/* Tabs Container */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="flex border-b border-gray-200 px-6">
          {(["overview", "data", "notes"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors capitalize ${
                activeTab === tab ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab === "data" ? "Learning Data" : tab === "notes" ? "Teacher Notes" : tab}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {[
                { label: "Learning Preferences", icon: BookOpen, items: student.learningPreferences, color: "blue" },
                { label: "Strengths", icon: Target, items: student.strengths, color: "green" },
                { label: "Areas for Growth", icon: AlertCircle, items: student.challenges, color: "orange" },
              ].map((section) => (
                <div key={section.label}>
                  <div className="flex items-center gap-2 mb-3">
                    <section.icon className={`w-4 h-4 text-${section.color}-600`} />
                    <h3 className="text-sm font-bold text-gray-900">{section.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((item, i) => (
                      <span key={i} className={`px-3 py-1.5 bg-${section.color}-50 text-${section.color}-700 rounded-lg text-sm font-medium border border-${section.color}-100`}>
                        {item}
                      </span>
                    ))}
                    {section.items.length === 0 && <p className="text-sm text-gray-400 italic">No information added yet</p>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "data" && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Subject Performance</h3>
              {student.learningData.map((data, i) => (
                <div key={i} className="p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-gray-900">{data.subject}</span>
                      {data.trend === "up" && <TrendingUp className="w-4 h-4 text-green-600" />}
                      {data.trend === "down" && <TrendingDown className="w-4 h-4 text-red-600" />}
                      {data.trend === "stable" && <Minus className="w-4 h-4 text-gray-400" />}
                    </div>
                    <span className="text-xl font-bold text-gray-900">{data.score}%</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${data.score >= 80 ? "bg-green-500" : data.score >= 60 ? "bg-blue-500" : "bg-orange-500"}`} style={{ width: `${data.score}%` }} />
                    </div>
                    <span className="text-xs text-gray-500 font-medium whitespace-nowrap">
                      Last: {new Date(data.lastAssessment).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "notes" && (
            <div className="space-y-4">
              <textarea
                placeholder="Add teacher notes about this student..."
                rows={8}
                value={student.notes}
                onChange={(e) => onUpdateNotes({ ...student, notes: e.target.value })}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm resize-none"
              />
              <button onClick={() => onUpdateNotes(student)} className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-sm">
                Save Notes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};