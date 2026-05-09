import { ColorClasses } from "@/types/management";

export const getColorClasses = (color: string): ColorClasses => {
  const colors: Record<string, ColorClasses> = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      gradient: "from-blue-500 to-blue-600",
      border: "border-blue-200",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      gradient: "from-purple-500 to-purple-600",
      border: "border-purple-200",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-600",
      gradient: "from-green-500 to-green-600",
      border: "border-green-200",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      gradient: "from-orange-500 to-orange-600",
      border: "border-orange-200",
    },
  };
  return colors[color] || colors.blue;
};