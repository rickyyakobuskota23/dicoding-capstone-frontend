import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LessonPlansPageHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          My Lesson Plans
        </h1>
        <p className="text-sm text-slate-600">
          Manage and organize your differentiated lesson plans
        </p>
      </div>

      <Button asChild className="h-11 rounded-lg bg-blue-600">
        <Link href="/dashboard/ai-generator">
          <Plus className="mr-2 h-4 w-4" />
          Create New Plan
        </Link>
      </Button>
    </div>
  );
}