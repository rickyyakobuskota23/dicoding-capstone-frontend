import Link from "next/link";
import { Users } from "lucide-react";

import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { ClassOverviewItem } from "@/types/dashboard";

interface ClassOverviewCardProps {
  classes: ClassOverviewItem[];
}

export function ClassOverviewCard({ classes }: ClassOverviewCardProps) {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg">Class Overview</CardTitle>

        <Link
          href="/dashboard/student-profiles"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          View All
        </Link>
      </CardHeader>

      <CardContent className="space-y-4">
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className="rounded-xl border bg-linear-to-br from-muted/30 to-background p-5"
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br text-white ${classItem.colorClass}`}
              >
                <Users className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground">
                  {classItem.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {classItem.students} students
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Average Progress</span>
                <span className="font-medium text-foreground">
                  {classItem.avgProgress}%
                </span>
              </div>

              <Progress value={classItem.avgProgress} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}