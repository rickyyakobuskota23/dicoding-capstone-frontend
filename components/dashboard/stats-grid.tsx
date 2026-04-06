import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import type { DashboardStat, StatBadgeTone } from "@/types/dashboard";

interface StatsGridProps {
  stats: DashboardStat[];
}

const badgeToneMap: Record<StatBadgeTone, string> = {
  success:
    "bg-green-50 text-green-700 hover:bg-green-50 border-transparent dark:bg-green-950 dark:text-green-300",
  info: "bg-blue-50 text-blue-700 hover:bg-blue-50 border-transparent dark:bg-blue-950 dark:text-blue-300",
  warning:
    "bg-orange-50 text-orange-700 hover:bg-orange-50 border-transparent dark:bg-orange-950 dark:text-orange-300",
  secondary:
    "bg-purple-50 text-purple-700 hover:bg-purple-50 border-transparent dark:bg-purple-950 dark:text-purple-300",
};

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card key={stat.title} className="border-border/60 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconBgClass}`}
                >
                  <Icon className={`h-6 w-6 ${stat.iconClass}`} />
                </div>

                <Badge
                  variant="secondary"
                  className={badgeToneMap[stat.badgeTone]}
                >
                  {stat.badge}
                </Badge>
              </div>

              <div className="space-y-1">
                <h2 className="text-2xl font-semibold text-foreground">
                  {stat.value}
                </h2>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}