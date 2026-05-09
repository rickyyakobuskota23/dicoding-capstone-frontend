export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  school: string;
  gradeLevel: string;
  subjectArea: string;
  avatar: string;
}

export interface NotificationPreference {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}