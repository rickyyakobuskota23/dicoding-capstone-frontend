import { User } from "lucide-react";
import { UserProfile } from "@/types/settings";
import { Button } from "@/components/ui/button";

interface ProfileSettingsProps {
  profile: UserProfile;
  setProfile: (profile: UserProfile) => void;
}

export const ProfileSettings = ({ profile, setProfile }: ProfileSettingsProps) => (
  <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
    <div className="p-6 border-b border-border">
      <div className="flex items-center gap-2">
        <User className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-bold text-foreground">Profile Settings</h2>
      </div>
    </div>

    <div className="p-6 space-y-6">
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {profile.avatar}
        </div>
        <Button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition text-sm font-medium text-foreground">
          Change Photo
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { label: "First Name", key: "firstName", type: "text" },
          { label: "Last Name", key: "lastName", type: "text" },
          { label: "Email", key: "email", type: "email" },
          { label: "School", key: "school", type: "text" },
        ].map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-semibold text-muted-foreground mb-2">{field.label}</label>
            <input
              type={field.type}
              value={(profile as any)[field.key]}
              onChange={(e) => setProfile({ ...profile, [field.key]: e.target.value })}
              className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm text-foreground"
            />
          </div>
        ))}

        <div>
          <label className="block text-sm font-semibold text-muted-foreground mb-2">Grade Level</label>
          <select
            value={profile.gradeLevel}
            onChange={(e) => setProfile({ ...profile, gradeLevel: e.target.value })}
            className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-lg text-sm text-foreground outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Grade 4</option>
            <option>Grade 5</option>
            <option>Grade 6</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-muted-foreground mb-2">Subject Area</label>
          <select
            value={profile.subjectArea}
            onChange={(e) => setProfile({ ...profile, subjectArea: e.target.value })}
            className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-lg text-sm text-foreground outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All Subjects</option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>English</option>
          </select>
        </div>
      </div>

      <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-bold shadow-lg shadow-blue-100 dark:shadow-none">
        Save Changes
      </button>
    </div>
  </div>
);