"use client";

import { Sparkles, Loader2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LessonGeneratorFormData } from "@/types/ai-generator";
import { SUBJECTS, GRADE_LEVELS, DIVERSITY_LEVELS, DIFFERENTIATION_STRATEGIES } from "@/data/ai-generator";


interface FormProps {
  formData: LessonGeneratorFormData;
  isGenerating: boolean;
  onChange: (name: string, value: unknown) => void;
  onGenerate: () => void;
}

export function LessonGeneratorForm({
  formData,
  isGenerating,
  onChange,
  onGenerate,
}: FormProps) {
  const isInvalid =
    !formData.subject ||
    !formData.gradeLevel ||
    !formData.topic ||
    !formData.learningObjective;

  return (
    <div className="flex h-full flex-col border-r border-border bg-white">
      {/* Header */}
      <div className="border-b border-border p-6">
        <div className="mb-2 flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-semibold">AI Lesson Generator</h1>
        </div>
        <p className="text-sm text-slate-600">
          Generate differentiated lesson plans powered by AI
        </p>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {/* Basic Information */}
        <section className="space-y-4">
          <h3 className="text-sm font-medium text-slate-900">Basic Information</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject *</label>
              <Select
                value={formData.subject}
                onValueChange={(value) => onChange("subject", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  {SUBJECTS.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Grade Level *</label>
              <Select
                value={formData.gradeLevel}
                onValueChange={(value) => onChange("gradeLevel", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select grade level" />
                </SelectTrigger>
                <SelectContent>
                  {GRADE_LEVELS.map((grade) => (
                    <SelectItem key={grade} value={grade}>
                      {grade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Topic *</label>
              <Input
                value={formData.topic}
                onChange={(e) => onChange("topic", e.target.value)}
                placeholder="e.g., Fractions, Photosynthesis"
                aria-label="Topic"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Learning Objective *</label>
              <textarea
                className="flex min-h-24 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                value={formData.learningObjective}
                onChange={(e) => onChange("learningObjective", e.target.value)}
                placeholder="Describe what students should learn..."
              />
            </div>
          </div>
        </section>

        {/* Class Information */}
        <section className="space-y-4">
          <h3 className="text-sm font-medium text-slate-900">Class Information</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Class Size</label>
              <Input
                type="number"
                value={formData.classSize}
                onChange={(e) => onChange("classSize", e.target.value)}
                placeholder="Number of students"
                aria-label="Class Size"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Diversity Level</label>
              <Select
                value={formData.diversityLevel}
                onValueChange={(value) => onChange("diversityLevel", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select diversity level" />
                </SelectTrigger>
                <SelectContent>
                  {DIVERSITY_LEVELS.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Differentiation Strategies */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium text-slate-900">
              Differentiation Strategies
            </h3>
            <Info className="h-4 w-4 text-slate-400" />
          </div>
          <div className="grid grid-cols-1 gap-3">
            {DIFFERENTIATION_STRATEGIES.map((strategy) => (
              <label
                key={strategy.id}
                className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-slate-50"
              >
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  checked={(formData as any)[strategy.id]}
                  onChange={(e) => onChange(strategy.id, e.target.checked)}
                />
                <div>
                  <div className="text-sm font-medium leading-none">
                    {strategy.label}
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{strategy.sub}</p>
                </div>
              </label>
            ))}
          </div>
        </section>
      </div>

      {/* Footer Action */}
      <div className="border-t border-border p-6 bg-slate-50/50">
        <Button
          onClick={onGenerate}
          disabled={isGenerating || isInvalid}
          className="h-12 w-full bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all active:scale-[0.98]"
        >
          {isGenerating ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-5 w-5" />
          )}
          {isGenerating ? "Generating Plan..." : "Generate Lesson Plan"}
        </Button>
        {isInvalid && !isGenerating && (
          <p className="mt-3 text-center text-xs text-slate-500">
            Please fill in all required fields (*) to continue.
          </p>
        )}
      </div>
    </div>
  );
}