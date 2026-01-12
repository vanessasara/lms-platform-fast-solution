import { defineField, defineType } from "sanity";

// Quiz Type
export const quizType = defineType({
  name: "quiz",
  title: "Quiz",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Quiz Title",
      type: "string",
      validation: (rule) => rule.required().min(3).max(100),
      description: "Title of the quiz (e.g., 'JavaScript Fundamentals Quiz')",
    }),
    defineField({
      name: "timeLimit",
      title: "Time Limit (minutes)",
      type: "number",
      validation: (rule) => rule.min(1).max(180),
      description: "Time limit in minutes (leave empty for no limit)",
    }),
    defineField({
      name: "questions",
      title: "Questions",
      type: "array",
      of: [{ type: "reference", to: [{ type: "quizQuestion" }] }],
      validation: (rule) => rule.required().min(1).max(100),
      description: "Add questions to this quiz",
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      initialValue: true,
      description: "Toggle quiz availability",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (rule) => rule.min(0),
      description: "Order in which quiz appears (lower numbers appear first)",
    }),
  ],
  preview: {
    select: {
      title: "title",
      questionCount: "questions",
      isActive: "isActive",
    },
    prepare({ title, questionCount, isActive }) {
      return {
        title: title,
        subtitle: `${questionCount?.length || 0} questions • ${
          isActive ? "Active" : "Inactive"
        }`,
      };
    },
  },
});

