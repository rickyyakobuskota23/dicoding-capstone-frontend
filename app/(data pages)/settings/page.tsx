'use client'

import { useState } from "react";
import { Settings as SettingsIcon, Lock, Globe } from "lucide-react";
import { UserProfile } from "@/types/settings";
import { ProfileSettings } from "@/components/management/ProfileSettings";
import { NotificationSettings } from "@/components/management/NotificationSettings";
import { AppearanceSettings } from "@/components/management/AppearanceSettings";

export default function Settings() {
  const [profile, setProfile] = useState<UserProfile>({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@school.edu",
    school: "Lincoln Elementary",
    gradeLevel: "Grade 5",
    subjectArea: "All Subjects",
    avatar: "JD",
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <SettingsIcon className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        </div>
        <p className="text-muted-foreground">Manage your account, privacy, and display preferences</p>
      </div>

      <div className="space-y-6">
        <ProfileSettings profile={profile} setProfile={setProfile} />
        <NotificationSettings />

        {/* Security Section */}
        <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-foreground">Security Settings</h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/30 border border-border rounded-xl">
              <div>
                <p className="text-sm font-bold text-foreground">Password</p>
                <p className="text-xs text-muted-foreground">Last changed 3 months ago</p>
              </div>
              <button className="px-4 py-2 border border-border rounded-lg hover:bg-background transition text-sm font-medium text-foreground">
                Change Password
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/30 border border-border rounded-xl">
              <div>
                <p className="text-sm font-bold text-foreground">Two-Factor Authentication</p>
                <p className="text-xs text-muted-foreground">Add an extra layer of security to your account</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-bold">
                Enable
              </button>
            </div>
          </div>
        </div>

        <AppearanceSettings />

        {/* Language & Region */}
        <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-foreground">Language & Region</h2>
            </div>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-muted-foreground mb-2">Language</label>
              <select className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-lg text-sm text-foreground outline-none focus:ring-2 focus:ring-blue-500">
                <option>English (US)</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-muted-foreground mb-2">Time Zone</label>
              <select className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-lg text-sm text-foreground outline-none focus:ring-2 focus:ring-blue-500">
                <option>Eastern Time (ET)</option>
                <option>Pacific Time (PT)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}