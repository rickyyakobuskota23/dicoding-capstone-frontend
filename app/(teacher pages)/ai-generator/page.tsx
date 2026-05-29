"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LessonGeneratorForm } from "@/components/ai-generator/lesson-generator-form";
import { LessonGeneratorOutput } from "@/components/ai-generator/lesson-generator-output";
import LessonGeneratorEmptyState from "@/components/ai-generator/lesson-generator-empty-state";
import { LessonGeneratorFormData } from "@/types/ai-generator";
import { useApi } from "@/lib/api-client";
import { useToast } from "@/hooks/use-toast";

export default function AILessonGeneratorPage() {
  const router = useRouter();
  const { generateLessonPlan, saveLessonPlan } = useApi();
  const { toast } = useToast();
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<any>(null);

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

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const result = await generateLessonPlan(formData);
      
      if (!result || (typeof result === 'object' && Object.keys(result).length === 0)) {
        throw new Error("Received empty response from the server.");
      }
      
      setGeneratedPlan(result);
      setHasGenerated(true);
      
      if (result.is_fallback) {
        toast({
          title: "Notice",
          description: result.error_message || "API quota limit reached. Generated a standard template based on your inputs.",
        });
      }
    } catch (error: any) {
      console.error("Lesson generation error:", error);
      toast({
        title: "Generation Failed",
        description: error.message || "An unexpected error occurred while connecting to the AI service.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = async (redirect = true, statusOverride?: string) => {
    if (!generatedPlan) return null;
    
    setIsSaving(true);
    try {
      // Mapping frontend generated output to backend model
      const payload = {
        title: `${formData.topic} - ${formData.subject}`,
        subject: formData.subject,
        grade_level: formData.gradeLevel,
        topic: formData.topic,
        learning_objective: formData.learningObjective,
        class_size: formData.classSize,
        diversity_level: formData.diversityLevel,
        content_diff: formData.contentDiff,
        process_diff: formData.processDiff,
        product_diff: formData.productDiff,
        environment_diff: formData.environmentDiff,
        duration: generatedPlan.overview.duration,
        materials: generatedPlan.overview.materials,
        objectives: generatedPlan.objectives,
        activities: generatedPlan.activities,
        differentiation_content: generatedPlan.differentiation?.content,
        differentiation_process: generatedPlan.differentiation?.process,
        differentiation_product: generatedPlan.differentiation?.product,
        differentiation_environment: generatedPlan.differentiation?.environment,
        status: statusOverride || "draft",
      };
      
      const savedPlan = await saveLessonPlan(payload);
      
      if (redirect) {
        toast({
          title: "Success",
          description: `Lesson plan saved as ${statusOverride || "draft"} successfully.`,
        });
        router.push("/lesson-plans");
      }
      return savedPlan;
    } catch (error: any) {
      toast({
        title: "Save Failed",
        description: error.message || "Could not save the lesson plan.",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsSaving(false);
    }
  };

  const handleEdit = async () => {
    const savedPlan = await handleSave(false);
    if (savedPlan && savedPlan.id) {
      router.push(`/lesson-plans/${savedPlan.id}/edit`);
    }
  };

  return (
    <div className="flex h-[calc(100vh-64px)] bg-slate-50 overflow-hidden">
      <aside className="w-100 shrink-0 border-r border-slate-200">
        <LessonGeneratorForm
          formData={formData}
          isGenerating={isGenerating}
          onChange={handleInputChange}
          onGenerate={handleGenerate}
        />
      </aside>

      <main className="flex-1 overflow-y-auto">
        {hasGenerated && generatedPlan ? (
          <LessonGeneratorOutput
            plan={generatedPlan}
            formData={formData}
            onSave={(status) => handleSave(true, status)}
            onEdit={handleEdit}
          />
        ) : (
          <LessonGeneratorEmptyState />
        )}
      </main>
    </div>
  );
}
