import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { AiSuggestion } from "@/types/dashboard";

interface AiSuggestionsCardProps {
  suggestions: AiSuggestion[];
}

export function AiSuggestionsCard({
  suggestions,
}: AiSuggestionsCardProps) {
  return (
    <Card className="border-blue-100 bg-linear-to-br from-blue-50 to-purple-50 shadow-sm dark:bg-linear-to-br dark:from-blue-900 dark:to-blue-500 dark:border-blue-900">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-blue-600" />
          <CardTitle className="text-lg">AI Suggestions</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="rounded-xl border border-blue-100 bg-background p-4 dark:border-blue-900"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{suggestion.icon}</span>
              <div className="min-w-0">
                <h3 className="text-sm font-medium text-foreground">
                  {suggestion.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {suggestion.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        <Button asChild className="w-full">
          <Link href="/dashboard/ai-generator">
            <Sparkles className="mr-2 h-4 w-4" />
            Generate New Plan
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}