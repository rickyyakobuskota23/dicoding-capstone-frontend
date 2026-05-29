import { useAuth } from "@clerk/nextjs";

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api").replace(/\/$/, "");

export const useApi = () => {
  const { getToken } = useAuth();

  const request = async (endpoint: string, options: RequestInit = {}) => {
    const token = await getToken();
    
    const headers = new Headers(options.headers);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");

    const response = await fetch(`${API_BASE_URL}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || errorData.details || errorData.error || "API request failed");
    }

    if (response.status === 204) {
      return null;
    }

    return response.json().catch(() => ({}));
  };

  return {
    generateLessonPlan: (data: any) => request("/lessons/lesson-plans/generate/", {
      method: "POST",
      body: JSON.stringify(data),
    }),
    saveLessonPlan: (data: any) => request("/lessons/lesson-plans/", {
      method: "POST",
      body: JSON.stringify(data),
    }),
    getLessonPlans: () => request("/lessons/lesson-plans/"),
    getLessonPlan: (id: string | number) => request(`/lessons/lesson-plans/${id}/`),
    updateLessonPlan: (id: string | number, data: any) => request(`/lessons/lesson-plans/${id}/`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
    deleteLessonPlan: (id: string | number) => request(`/lessons/lesson-plans/${id}/`, {
      method: "DELETE",
    }),
    // Add more methods as needed
  };
};
