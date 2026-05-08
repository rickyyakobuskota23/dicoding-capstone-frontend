export const MOCK_GENERATED_PLAN = {
  overview: {
    duration: "60 minutes",
    materials: [
      "Fraction circles (manipulatives)",
      "Whiteboard and markers",
      "Tiered worksheets (3 levels)",
      "Colored paper for activities",
      "Visual anchor charts",
      "Digital presentation slides"
    ]
  },
  objectives: [
    "Students will understand the concept of fractions as parts of a whole",
    "Students will be able to identify and write fractions using proper notation",
    "Students will demonstrate understanding through varied assessment methods"
  ],
  activities: [
    {
      tier: "Tier 1",
      title: "Visual Learners & Below Grade Level",
      content: "Use fraction circles and visual models. Focus on basic fraction identification (halves, quarters).",
      color: "blue"
    },
    {
      tier: "Tier 2",
      title: "On-Level Learners",
      content: "Practice writing fractions and identifying equivalent fractions with common denominators.",
      color: "purple"
    },
    {
      tier: "Tier 3",
      title: "Advanced Learners",
      content: "Challenge students with comparing unlike fractions and real-world applications.",
      color: "green"
    }
  ]
};

export const SUBJECTS = [
  "Mathematics",
  "English Language Arts",
  "Science",
  "Social Studies",
  "Art",
  "Physical Education",
];

export const GRADE_LEVELS = [
  "Kindergarten",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
];

export const DIVERSITY_LEVELS = [
  "Low (Homogeneous)",
  "Medium (Some Variation)",
  "High (Very Diverse)",
];

export const DIFFERENTIATION_STRATEGIES = [
  { id: "contentDiff", label: "Content", sub: "Vary what students learn" },
  { id: "processDiff", label: "Process", sub: "Vary how students learn" },
  { id: "productDiff", label: "Product", sub: "Demonstration of learning" },
  { id: "environmentDiff", label: "Environment", sub: "Learning atmosphere" },
] as const;