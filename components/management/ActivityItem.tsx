import { UsersRound, School, UserCheck } from "lucide-react";
import { RecentActivity } from "@/types/management";
import { getColorClasses } from "@/lib/management-utils";

export const ActivityItem = ({ activity }: { activity: RecentActivity }) => {
  const iconMap = {
    student: UsersRound,
    class: School,
    teacher: UserCheck,
  };
  const colorMap = {
    student: "green",
    class: "blue",
    teacher: "purple",
  };

  const Icon = iconMap[activity.type];
  const colors = getColorClasses(colorMap[activity.type]);

  return (
    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
      <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
        <Icon className={`w-5 h-5 ${colors.text}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 mb-1">{activity.action}</p>
        <p className="text-sm text-gray-600">{activity.details}</p>
      </div>
      <span className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</span>
    </div>
  );
};