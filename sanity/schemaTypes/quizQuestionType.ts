import { defineField, defineType } from "sanity";

type QuizOption = {
  text?: string;
  isCorrect?: boolean;
};


export const quizQuestionType = defineType({
    name: "quizQuestion",
    title: "Quiz Question",
    type: "document",
    fields: [
      defineField({
        name: "question",
        title: "Question",
        type: "text",
        validation: (rule) => rule.required().min(10).max(500),
        description: "The question text",
      }),
      defineField({
        name: "options",
        title: "Answer Options",
        type: "array",
        of: [
          {
            type: "object",
            name: "option",
            fields: [
              defineField({
                name: "text",
                title: "Option Text",
                type: "string",
                validation: (rule) => rule.required().min(1).max(200),
              }),
              defineField({
                name: "isCorrect",
                title: "Is Correct Answer",
                type: "boolean",
                initialValue: false,
              }),
            ],
            preview: {
              select: {
                text: "text",
                isCorrect: "isCorrect",
              },
              prepare({ text, isCorrect }) {
                return {
                  title: text,
                  subtitle: isCorrect ? "✓ Correct Answer" : "Incorrect",
                };
              },
            },
          },
        ],
        validation: (rule) =>
          rule
            .required()
            .min(2)
            .max(6)
            .custom((options) => {
              const opts = options as Array<{ text?: string; isCorrect?: boolean }> | undefined;
            
              if (!opts || opts.length < 2) {
                return "At least 2 options are required";
              }
            
              // Unique option text check
              const optionTexts = opts.map((opt) => opt.text?.trim().toLowerCase());
              const uniqueTexts = new Set(optionTexts);
              if (uniqueTexts.size !== optionTexts.length) {
                return "All options must be unique";
              }
            
              // Correct answer constraint
              const correctAnswers = opts.filter((opt) => opt.isCorrect);
              if (correctAnswers.length === 0) {
                return "At least one option must be marked as correct";
              }
              if (correctAnswers.length > 1) {
                return "Only one option can be marked as correct";
              }
            
              return true;
            }),            
        description: "Add 2-6 answer options (mark one as correct)",
      }),
      defineField({
        name: "explanation",
        title: "Explanation",
        type: "text",
        validation: (rule) => rule.max(500),
        description: "Optional explanation shown after answering",
      }),
      defineField({
        name: "points",
        title: "Points",
        type: "number",
        initialValue: 1,
        validation: (rule) => rule.required().min(1).max(100).integer(),
        description: "Points awarded for correct answer",
      }),
    ],
    preview: {
      select: {
        question: "question",
        points: "points",
        options: "options",
      },
      prepare({ question, points, options }) {
        const correctOption = options?.find((opt:QuizOption) => opt.isCorrect);
        return {
          title: question,
          subtitle: `${points} point${points > 1 ? "s" : ""} • Correct: ${
            correctOption?.text || "Not set"
          }`,
        };
      },
    },
  });
