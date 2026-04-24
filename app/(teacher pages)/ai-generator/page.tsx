"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LessonGeneratorForm } from "@/components/ai-generator/lesson-generator-form";
import { LessonGeneratorOutput } from "@/components/ai-generator/lesson-generator-output";
import LessonGeneratorEmptyState from "@/components/ai-generator/lesson-generator-empty-state";
import { LessonGeneratorFormData } from "@/types/ai-generator";
import { MOCK_GENERATED_PLAN} from "@/data/ai-generator";

export default function AILessonGeneratorPage() {
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const [formData, setFormData] = useState<LessonGeneratorFormData>({
    subject: "",
    gradeLevel: "",
    topic: "",
    learningObjective: "",
    classSize: "",
    diversityLevel: "",
    contentDiff: false,
    processDiff: false,
    productDiff: false,
    environmentDiff: false,
  });

  const handleInputChange = (name: string, value: unknown) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
    }, 1500);
  };

  return (
    <div className="flex h-[calc(100vh-64px)] bg-slate-50 overflow-hidden">
      <aside className="w-100 shrink-0">
        <LessonGeneratorForm
          formData={formData}
          isGenerating={isGenerating}
          onChange={handleInputChange}
          onGenerate={handleGenerate}
        />
      </aside>

      <main className="flex-1 overflow-y-auto">
        {hasGenerated ? (
          <LessonGeneratorOutput
            plan={MOCK_GENERATED_PLAN}
            formData={formData}
            onSave={() => router.push("/dashboard/lesson-plans")}
          />
        ) : (
          <LessonGeneratorEmptyState />
        )}
      </main>
    </div>
  );
}