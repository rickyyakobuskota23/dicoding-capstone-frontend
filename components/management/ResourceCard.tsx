import { Heart, MoreVertical, Download } from "lucide-react";
import { Resource } from "@/types/resource-library";
import { typeConfigs } from "@/data/resource-library-data";

interface ResourceCardProps {
  resource: Resource;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export const ResourceCard = ({ resource, isFavorite, onToggleFavorite }: ResourceCardProps) => {
  const config = typeConfigs[resource.type];
  const Icon = config.icon;

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-blue-200 transition group">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <span className={`px-2 py-1 rounded text-xs font-bold border capitalize ${config.colorClass}`}>
              {resource.type}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => onToggleFavorite(resource.id)}
              className={`p-2 rounded-lg transition ${isFavorite ? "bg-red-50 text-red-600" : "hover:bg-gray-100 text-gray-400"}`}
            >
              <Heart className="w-4 h-4" fill={isFavorite ? "currentColor" : "none"} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">{resource.title}</h3>
        <p className="text-xs text-gray-600 line-clamp-2">{resource.description}</p>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4 text-xs font-medium text-gray-500">
          <span>{resource.subject}</span>
          <span>{resource.grade}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
            <Download className="w-3.5 h-3.5" />
            <span>{resource.downloads} downloads</span>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-semibold shadow-sm">
            <Download className="w-4 h-4" /> Download
          </button>
        </div>
      </div>
    </div>
  );
};