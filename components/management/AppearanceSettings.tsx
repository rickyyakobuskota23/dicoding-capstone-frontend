'use client'

import { Palette, Monitor, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export const AppearanceSettings = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <Palette className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-bold text-foreground">Appearance</h2>
        </div>
      </div>

      <div className="p-6">
        <label className="block text-sm font-semibold text-muted-foreground mb-4">Theme Preference</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { id: "light", icon: Sun, label: "Light" },
            { id: "dark", icon: Moon, label: "Dark" },
            { id: "system", icon: Monitor, label: "System" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`flex flex-col items-center gap-3 p-4 border-2 rounded-xl transition-all ${
                theme === t.id
                  ? "border-blue-600 bg-blue-50/50 dark:bg-blue-950/30 text-blue-600"
                  : "border-border text-muted-foreground hover:bg-muted hover:border-muted-foreground/20"
              }`}
            >
              <t.icon className="w-6 h-6" />
              <span className="text-sm font-bold">{t.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};