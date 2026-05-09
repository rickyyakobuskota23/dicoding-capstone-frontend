import { LucideIcon } from "lucide-react";

export type ResourceType = "worksheet" | "activity" | "video" | "document";

export interface Resource {
  id: number;
  title: string;
  type: ResourceType;
  subject: string;
  grade: string;
  description: string;
  downloads: number;
  isFavorite: boolean;
}

export interface TypeStyle {
  icon: LucideIcon;
  colorClass: string;
}