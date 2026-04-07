"use client";

import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LessonPlansToolbarProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

export function LessonPlansToolbar({
  searchValue = "",
  onSearchChange,
}: LessonPlansToolbarProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center">
      <div className="relative w-full md:max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <Input
          value={searchValue}
          onChange={(e) => onSearchChange?.(e.target.value)}
          placeholder="Search lesson plans..."
          className="h-11 pl-9"
          aria-label="search column"
        />
      </div>

      <Button
        type="button"
        variant="outline"
        className="h-11 justify-start rounded-lg md:w-auto"
      >
        <Filter className="mr-2 h-4 w-4" />
        Filters
      </Button>
    </div>
  );
}