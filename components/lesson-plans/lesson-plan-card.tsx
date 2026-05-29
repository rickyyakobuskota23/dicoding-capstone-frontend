import Link from "next/link";
import { Calendar, MoreVertical, Users, Edit, Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { LessonPlan } from "@/types/lesson-plan";
import {
  formatLessonPlanDate,
  getStatusBadgeStyles,
  getStatusLabel,
  getSubjectGradient,
} from "@/lib/lesson-plan-utils";

interface LessonPlanCardProps {
  plan: LessonPlan;
  onDelete: (id: string) => void;
}

export function LessonPlanCard({ plan, onDelete }: LessonPlanCardProps) {
  return (
    <Link href={`/lesson-plans/${plan.id}/edit`} className="group block">
      <Card className="overflow-hidden rounded-2xl border-slate-200 transition-all duration-200 hover:border-blue-200 hover:shadow-lg">
        <CardHeader
          className={`relative h-32 bg-linear-to-br ${getSubjectGradient(plan.color)} p-6`}
        >
          <div className="absolute right-4 top-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  aria-label="button details"
                  size="icon"
                  variant="ghost"
                  className="h-9 w-9 rounded-lg bg-white/20 text-white backdrop-blur hover:bg-white/30 hover:text-white hover:cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/lesson-plans/${plan.id}/edit`} className="cursor-pointer">
                    <Edit className="mr-2 h-4 w-4" />
                    <span>Edit Plan</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-red-600 focus:text-red-600 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onDelete(plan.id);
                  }}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  <span>Delete Plan</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="max-w-[85%] text-white">
            <span className="mb-2 inline-block rounded bg-white/20 px-2 py-1 text-xs backdrop-blur">
              {plan.subject}
            </span>
            <h3 className="line-clamp-2 text-lg font-semibold leading-snug">
              {plan.title}
            </h3>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <div className="mb-4 space-y-3">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Calendar className="h-4 w-4" />
              <span>{formatLessonPlanDate(plan.date)}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Users className="h-4 w-4" />
              <span>
                {plan.studentsCount} students • {plan.grade}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span
              className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${getStatusBadgeStyles(
                plan.status
              )}`}
            >
              {getStatusLabel(plan.status)}
            </span>

            <span className="text-sm font-medium text-blue-600 group-hover:underline">
              View Details →
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}