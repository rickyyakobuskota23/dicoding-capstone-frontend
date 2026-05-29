"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { LessonPlanStats } from "@/components/lesson-plans/lesson-plan-stats";
import { LessonPlansGrid } from "@/components/lesson-plans/lesson-plans-grid";
import { LessonPlansPageHeader } from "@/components/lesson-plans/lesson-plans-page-header";
import { LessonPlansToolbar } from "@/components/lesson-plans/lesson-plans-toolbar";
import { useApi } from "@/lib/api-client";
import { LessonPlan } from "@/types/lesson-plan";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function LessonPlansPage() {
  const [search, setSearch] = useState("");
  const [plans, setPlans] = useState<LessonPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const { getLessonPlans, deleteLessonPlan } = useApi();
  const { toast } = useToast();

  const fetchPlans = useCallback(async () => {
    try {
      const data = await getLessonPlans();
      // Transform backend LessonPlan to frontend LessonPlan type
      const transformedPlans: LessonPlan[] = data.map((plan: any) => ({
        id: plan.id.toString(),
        title: plan.title,
        subject: plan.subject,
        grade: plan.grade_level,
        date: plan.created_at,
        studentsCount: parseInt(plan.class_size) || 0,
        status: plan.status,
        color: getSubjectColor(plan.subject),
      }));
      setPlans(transformedPlans);
    } catch (error) {
      console.error("Failed to fetch lesson plans:", error);
    } finally {
      setIsLoading(false);
    }
  }, [getLessonPlans]);

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  const handleDelete = async (id: string) => {
    try {
      await deleteLessonPlan(id);
      toast({
        title: "Deleted",
        description: "Lesson plan has been deleted successfully.",
      });
      // Update local state instead of refetching everything
      setPlans((prev) => prev.filter((p) => p.id !== id));
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete lesson plan.",
        variant: "destructive",
      });
    } finally {
      setDeleteId(null);
    }
  };

  const getSubjectColor = (subject: string): any => {
    const s = subject.toLowerCase();
    if (s.includes("math")) return "blue";
    if (s.includes("science")) return "green";
    if (s.includes("art")) return "pink";
    if (s.includes("english") || s.includes("language")) return "purple";
    if (s.includes("social")) return "orange";
    return "blue";
  };

  const filteredPlans = useMemo(() => {
    const normalized = search.trim().toLowerCase();
    if (!normalized) return plans;

    return plans.filter((plan) => {
      return (
        plan.title.toLowerCase().includes(normalized) ||
        plan.subject.toLowerCase().includes(normalized) ||
        plan.grade.toLowerCase().includes(normalized) ||
        plan.status.toLowerCase().includes(normalized)
      );
    });
  }, [search, plans]);

  const stats = useMemo(() => {
    return [
      { label: "Total Plans", value: plans.length },
      { label: "Active", value: plans.filter(p => p.status === 'active').length },
      { label: "Drafts", value: plans.filter(p => p.status === 'draft').length },
      { label: "Completed", value: plans.filter(p => p.status === 'completed').length },
    ];
  }, [plans]);

  if (isLoading) {
    return (
      <section className="mx-auto w-full max-w-400 space-y-8">
        <LessonPlansPageHeader />
        <LessonPlansToolbar searchValue={search} onSearchChange={setSearch} />
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-400 space-y-8">
      <LessonPlansPageHeader />

      <LessonPlansToolbar
        searchValue={search}
        onSearchChange={setSearch}
      />

      <LessonPlanStats stats={stats} />
      <LessonPlansGrid plans={filteredPlans} onDelete={setDeleteId} />

      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              lesson plan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700"
              onClick={() => deleteId && handleDelete(deleteId)}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
