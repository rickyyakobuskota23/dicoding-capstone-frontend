import Link from "next/link";
import { ArrowRight, Calendar, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { TeachingPlan } from "@/types/dashboard";

interface TeachingPlansCardProps {
  plans: TeachingPlan[];
}

export function TeachingPlansCard({ plans }: TeachingPlansCardProps) {
  return (
    <Card className="lg:col-span-2 border-border/60 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-blue-600" />
          <CardTitle className="text-lg">Today&apos;s Teaching Plans</CardTitle>
        </div>

        <Link
          href="/lesson-plans"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          View All
        </Link>
      </CardHeader>

      <CardContent className="space-y-4">
        {plans.map((plan) => (
          <Link
            key={plan.id}
            href={plan.href}
            className="flex items-center gap-4 rounded-xl bg-muted/50 p-4 transition hover:bg-muted"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border bg-background">
              <div className="text-center">
                <div className="text-xs text-muted-foreground">Time</div>
                <div className="text-sm font-medium text-foreground">
                  {plan.time.split(" ")[0]}
                </div>
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-medium text-foreground">
                {plan.title}
              </h3>

              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  {plan.students} students
                </span>

                <span>•</span>

                <Badge
                  variant="secondary"
                  className="bg-blue-50 text-blue-700 hover:bg-blue-50 dark:bg-blue-950 dark:text-blue-300"
                >
                  {plan.type}
                </Badge>
              </div>
            </div>

            <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground" />
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}