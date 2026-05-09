'use client'

import { useRouter} from "next/navigation";
import { quickStats, managementSections, recentActivities } from "@/data/management-data";
import { StatCard } from "@/components/management/StatCard";
import { ManagementCard } from "@/components/management/ManagementCard";
import { ActivityItem } from "@/components/management/ActivityItem";

export default function ManagementOverview() {
  const router = useRouter();

  return (
    <div className="h-full bg-gray-50 overflow-auto">
      <div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2 font-bold">Management Overview</h1>
          <p className="text-gray-600">
            Centralized hub for managing classes, teachers, and students
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {managementSections.map((section) => (
            <ManagementCard
              key={section.id}
              section={section}
              onClick={() => router.push(section.path)}
            />
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-gray-900">Recent Activity</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
          </div>

          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <ActivityItem key={index} activity={activity} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}