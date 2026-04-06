import { AiSuggestionsCard } from "@/components/dashboard/ai-suggestions-card";
import { ClassOverviewCard } from "@/components/dashboard/class-overview-card";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { LearningProgressChart } from "@/components/dashboard/learning-progress-chart";
import { RecentLessonsCard } from "@/components/dashboard/recent-lessons-card";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { StudentEngagementChart } from "@/components/dashboard/student-engagement-chart";
import { TeachingPlansCard } from "@/components/dashboard/teaching-plans-card";
import { dashboardData } from "@/data/dashboard-data";

const Dashboard = () => {

    const {
    greetingName,
    greetingTitle,
    greetingSubtitle,
    stats,
    todayPlans,
    aiSuggestions,
    engagementData,
    progressData,
    recentLessons,
    classes,
  } = dashboardData;

    return (
        <div>
          <DashboardHeader
            title={greetingTitle}
            name={greetingName}
            subtitle={greetingSubtitle}
          />

          <StatsGrid stats={stats} />

          <section className="grid grid-cols-1 gap-8 mb-8 lg:grid-cols-3">
            <TeachingPlansCard plans={todayPlans} />
            <AiSuggestionsCard suggestions={aiSuggestions} />
          </section>

          <section className="grid grid-cols-1 gap-8 mb-8 lg:grid-cols-2">
            <StudentEngagementChart data={engagementData} />
            <LearningProgressChart data={progressData} />
          </section>

          <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <RecentLessonsCard lessons={recentLessons} />
            <ClassOverviewCard classes={classes} />
          </section>
        </div>
    )
}
export default Dashboard
