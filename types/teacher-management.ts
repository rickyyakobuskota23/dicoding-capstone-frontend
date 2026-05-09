export interface Teacher {
  id: number;
  name: string;
  email: string;
  phone: string;
  subjects: string[];
  classes: string[];
  classCount: number;
  studentCount: number;
  avatar: string;
  color: string;
}

export interface TeacherFormData {
  name: string;
  email: string;
  phone: string;
  subjects: string[];
  classes: string[];
  color: string;
}