import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { LessonPlanStat } from "@/types/lesson-plan";

interface LessonPlanStatsProps {
  stats: LessonPlanStat[];
}

export function LessonPlanStats({ stats }: LessonPlanStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="rounded-xl border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-slate-600">{stat.label}</span>

              {stat.label === "Total Plans" ? (
                <FileText className="h-5 w-5 text-blue-600" />
              ) : stat.label === "Active" ? (
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              ) : stat.label === "Completed" ? (
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
              ) : (
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
              )}
            </div>

            <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}