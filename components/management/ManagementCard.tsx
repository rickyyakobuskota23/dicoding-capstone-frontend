import { ManagementSection } from "@/types/management";
import { getColorClasses } from "@/lib/management-utils";

interface ManagementCardProps {
  section: ManagementSection;
  onClick: () => void;
}

export const ManagementCard = ({ section, onClick }: ManagementCardProps) => {
  const colors = getColorClasses(section.color);
  return (
    <div
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition cursor-pointer group"
      onClick={onClick}
    >
      <div className={`h-2 bg-gradient-to-r ${colors.gradient}`} />
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-14 h-14 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center`}>
            <section.icon className="w-7 h-7 text-white" />
          </div>
        </div>

        <h3 className="text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition">
          {section.title}
        </h3>
        <p className="text-sm text-gray-600 mb-6">{section.description}</p>

        <div className="grid grid-cols-2 gap-4">
          {section.stats.map((stat, index) => (
            <div key={index} className={`p-3 ${colors.bg} rounded-lg`}>
              <p className="text-xs text-gray-600 mb-1">{stat.label}</p>
              <p className={`text-xl ${colors.text}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-sm group-hover:bg-blue-50 group-hover:text-blue-600">
          Manage {section.title.replace(" Management", "")}s
        </button>
      </div>
    </div>
  );
};