import type { LessonPlan } from "@/types/lesson-plan";
import { LessonPlanCard } from "@/components/lesson-plans/lesson-plan-card";

interface LessonPlansGridProps {
  plans: LessonPlan[];
}

export function LessonPlansGrid({ plans }: LessonPlansGridProps) {
  if (plans.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
        <h3 className="text-lg font-semibold text-slate-900">
          No lesson plans found
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Try adjusting your search or create a new lesson plan.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
      {plans.map((plan) => (
        <LessonPlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
}