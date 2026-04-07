"use client";

import { useMemo, useState } from "react";
import { lessonPlanStats, lessonPlans } from "@/data/lesson-plans";
import { LessonPlanStats } from "@/components/lesson-plans/lesson-plan-stats";
import { LessonPlansGrid } from "@/components/lesson-plans/lesson-plans-grid";
import { LessonPlansPageHeader } from "@/components/lesson-plans/lesson-plans-page-header";
import { LessonPlansToolbar } from "@/components/lesson-plans/lesson-plans-toolbar";

export default function LessonPlansPage() {
  const [search, setSearch] = useState("");

  const filteredPlans = useMemo(() => {
    const normalized = search.trim().toLowerCase();

    if (!normalized) return lessonPlans;

    return lessonPlans.filter((plan) => {
      return (
        plan.title.toLowerCase().includes(normalized) ||
        plan.subject.toLowerCase().includes(normalized) ||
        plan.grade.toLowerCase().includes(normalized) ||
        plan.status.toLowerCase().includes(normalized)
      );
    });
  }, [search]);

  return (
    <section className="mx-auto w-full max-w-400 space-y-8 p-6 md:p-8">
      <LessonPlansPageHeader />

      <LessonPlansToolbar
        searchValue={search}
        onSearchChange={setSearch}
      />

      <LessonPlanStats stats={lessonPlanStats} />

      <LessonPlansGrid plans={filteredPlans} />
    </section>
  );
}