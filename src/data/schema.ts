/**
 * Schema for hand-curated annotations.
 *
 * Single source of truth for: what fields exist, which are required, what they
 * mean, and how to validate them. The build script reads this to compute
 * per-field coverage; future agents (filler, validator) read the same schema
 * so the work stays consistent.
 */

export type FieldKey = "title" | "summary" | "url";

export type AnnotationField = {
  key: FieldKey;
  label: string;
  required: boolean;
  description: string;
  /** Returns an error message if invalid, or null/undefined if OK. */
  validate?: (value: unknown) => string | null | undefined;
};

const isNonEmptyString = (v: unknown): v is string =>
  typeof v === "string" && v.trim().length > 0;

export const annotationSchema: AnnotationField[] = [
  {
    key: "title",
    label: "Title",
    required: true,
    description:
      "Short, plain-language name (replaces the long `leistung` text in UI). 3–8 words.",
    validate: (v) => {
      if (!isNonEmptyString(v)) return "must be a non-empty string";
      if (v.length > 140) return "should be under 140 characters";
      return null;
    },
  },
  {
    key: "summary",
    label: "Summary",
    required: true,
    description: "1–3 sentence description for non-experts in plain German.",
    validate: (v) => {
      if (!isNonEmptyString(v)) return "must be a non-empty string";
      if (v.length < 60) return "should be at least 60 characters";
      if (v.length > 600) return "should be under 600 characters";
      return null;
    },
  },
  {
    key: "url",
    label: "Law-text URL",
    required: true,
    description:
      "Direct link to the legal text — prefer gesetze-im-internet.de paragraph deep link.",
    validate: (v) => {
      if (!isNonEmptyString(v)) return "must be a non-empty string";
      if (!v.startsWith("https://")) return "must be an https URL";
      return null;
    },
  },
];

export const requiredFields = annotationSchema
  .filter((f) => f.required)
  .map((f) => f.key);
