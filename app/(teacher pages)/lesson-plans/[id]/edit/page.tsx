"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { LessonPlanEditor } from "@/components/lesson-plans/lesson-plan-editor";
import { useApi } from "@/lib/api-client";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function EditLessonPlanPage() {
  const params = useParams();
  const router = useRouter();
  const { getLessonPlan } = useApi();
  const { toast } = useToast();
  
  const [lessonPlan, setLessonPlan] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLessonPlan = async () => {
      try {
        const data = await getLessonPlan(params.id as string);
        setLessonPlan(data);
      } catch (error: any) {
        toast({
          title: "Error",
          description: "Could not load lesson plan.",
          variant: "destructive",
        });
        router.push("/lesson-plans");
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchLessonPlan();
    }
  }, [params.id, getLessonPlan, toast, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!lessonPlan) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] space-y-4">
        <h2 className="text-xl font-semibold">Lesson plan not found</h2>
        <button 
          onClick={() => router.push("/lesson-plans")}
          className="text-blue-600 hover:underline"
        >
          Back to lesson plans
        </button>
      </div>
    );
  }

  return <LessonPlanEditor initialData={lessonPlan} />;
}
