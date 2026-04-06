import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { RecentLesson } from "@/types/dashboard";

interface RecentLessonsCardProps {
  lessons: RecentLesson[];
}

export function RecentLessonsCard({ lessons }: RecentLessonsCardProps) {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg">Recent Lesson Plans</CardTitle>

        <Link
          href="/dashboard/lesson-plans"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          View All
        </Link>
      </CardHeader>

      <CardContent className="space-y-3">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            href={lesson.href}
            className="block rounded-xl border p-4 transition hover:border-blue-200"
          >
            <div className="mb-2 flex items-start justify-between gap-3">
              <h3 className="text-sm font-medium text-foreground">
                {lesson.title}
              </h3>

              <Badge
                variant="secondary"
                className="bg-green-50 text-green-700 hover:bg-green-50 dark:bg-green-950 dark:text-green-300"
              >
                {lesson.status}
              </Badge>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span>{lesson.subject}</span>
              <span>•</span>
              <span>{lesson.grade}</span>
              <span>•</span>
              <span>{lesson.date}</span>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}