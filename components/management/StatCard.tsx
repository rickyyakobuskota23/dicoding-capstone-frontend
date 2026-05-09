import { TrendingUp } from "lucide-react";
import { QuickStat } from "@/types/management";
import { getColorClasses } from "@/lib/management-utils";

export const StatCard = ({ stat }: { stat: QuickStat }) => {
  const colors = getColorClasses(stat.color);
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
          <stat.icon className={`w-6 h-6 ${colors.text}`} />
        </div>
        <TrendingUp className="w-5 h-5 text-green-600" />
      </div>
      <p className="text-2xl text-gray-900 mb-1">{stat.value}</p>
      <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
      <p className="text-xs text-gray-500">{stat.trend}</p>
    </div>
  );
};