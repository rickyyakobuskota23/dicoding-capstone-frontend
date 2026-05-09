import { Bell } from "lucide-react";

export const NotificationSettings = () => {
  const notifications = [
    { id: "email", label: "Email Notifications", description: "Receive updates about your students and lesson plans" },
    { id: "ai", label: "AI Suggestions", description: "Get AI-powered recommendations for differentiation" },
    { id: "weekly", label: "Weekly Reports", description: "Receive weekly analytics and progress summaries" },
    { id: "updates", label: "Resource Updates", description: "Get notified when new resources are added" },
  ];

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-bold text-foreground">Notification Settings</h2>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {notifications.map((n) => (
          <label key={n.id} className="flex items-center justify-between p-4 bg-muted/30 border border-border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
            <div>
              <p className="text-sm font-bold text-foreground">{n.label}</p>
              <p className="text-xs text-muted-foreground">{n.description}</p>
            </div>
            <input type="checkbox" defaultChecked={n.id !== "updates"} className="w-5 h-5 rounded border-border text-blue-600 focus:ring-blue-500 cursor-pointer" />
          </label>
        ))}
      </div>
    </div>
  );
};