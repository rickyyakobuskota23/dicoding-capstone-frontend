"use client";

import {
  Download,
  Save,
  FileText,
  Send,
  CheckCircle2,
  Clock,
  BookOpen,
  Target,
  Layers,
  Package
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LessonGeneratorFormData } from "@/types/ai-generator";

interface LessonGeneratorOutputProps {
  plan: {
    overview: {
      duration: string;
      materials: string[];
    };
    objectives: string[];
    activities: {
      tier: string;
      title: string;
      content: string;
      color: string;
    }[];
  };
  formData: LessonGeneratorFormData;
  onSave: () => void;
}

export function LessonGeneratorOutput({ plan, formData, onSave }: LessonGeneratorOutputProps) {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Action Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Generated Lesson Plan</h2>
          <p className="text-sm text-slate-500 mt-1">Review and customize your AI-generated materials</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm">
            <FileText className="w-4 h-4 mr-2" /> Edit
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" /> PDF
          </Button>
          <Button onClick={onSave} className="bg-blue-600 hover:bg-blue-700 text-white" size="sm">
            <Save className="w-4 h-4 mr-2" /> Save
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white" size="sm">
            <Send className="w-4 h-4 mr-2" /> Assign
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* 📋 Lesson Overview */}
        <Card>
          <CardHeader className="border-b bg-slate-50/50 py-4">
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Lesson Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
             <div className="space-y-1">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subject</span>
               <p className="font-semibold text-slate-700">{formData.subject || "Mathematics"}</p>
             </div>
             <div className="space-y-1">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Grade Level</span>
               <p className="font-semibold text-slate-700">{formData.gradeLevel || "Grade 5"}</p>
             </div>
             <div className="space-y-1">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Topic</span>
               <p className="font-semibold text-slate-700">{formData.topic}</p>
             </div>
             <div className="space-y-1">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Duration</span>
               <div className="flex items-center gap-1.5 text-slate-700">
                 <Clock className="w-4 h-4 text-slate-400" />
                 <p className="font-semibold">{plan.overview.duration}</p>
               </div>
             </div>
          </CardContent>
        </Card>

        {/* 🎯 Learning Objectives */}
        <Card>
          <CardHeader className="border-b bg-slate-50/50 py-4">
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Target className="w-5 h-5 text-red-500" />
              Learning Objectives
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              {plan.objectives.map((obj, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-600 group">
                  <div className="mt-1 bg-blue-50 p-0.5 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* ✨ Differentiated Activities */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-bold text-slate-800">Differentiated Activities</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {plan.activities.map((act) => (
              <div
                key={act.tier}
                className={`group relative overflow-hidden p-5 rounded-xl border transition-all hover:shadow-md
                  ${act.color === 'blue' ? 'bg-blue-50/40 border-blue-100 hover:border-blue-200' : ''}
                  ${act.color === 'purple' ? 'bg-purple-50/40 border-purple-100 hover:border-purple-200' : ''}
                  ${act.color === 'green' ? 'bg-green-50/40 border-green-100 hover:border-green-200' : ''}
                `}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Badge className={`
                    ${act.color === 'blue' ? 'bg-blue-600 text-white' : ''}
                    ${act.color === 'purple' ? 'bg-purple-600 text-white' : ''}
                    ${act.color === 'green' ? 'bg-green-600 text-white' : ''}
                  `}>
                    {act.tier}
                  </Badge>
                  <h4 className="font-bold text-slate-800">{act.title}</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-1">{act.content}</p>
                <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-5 
                  ${act.color === 'blue' ? 'bg-blue-600' : ''}
                  ${act.color === 'purple' ? 'bg-purple-600' : ''}
                  ${act.color === 'green' ? 'bg-green-600' : ''}
                `} />
              </div>
            ))}
          </div>
        </div>

        {/* 📦 Materials Needed */}
        <Card>
          <CardHeader className="border-b bg-slate-50/50 py-4">
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Package className="w-5 h-5 text-orange-500" />
              Materials Needed
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {plan.overview.materials.map((material, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="text-sm">{material}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}