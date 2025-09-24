import { z } from "zod";

export const surveySchema = z.object({
  propertyType: z.string().min(1, "Select a property type"),
  roofOrientation: z.array(z.string()).optional(),
  roofAge: z.string().min(1, "Select roof age"),
  electricityUsage: z.string().min(1, "Select usage"),
  otherSolutions: z.string().min(1, "Select option"),
  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
});

export type SurveyData = z.infer<typeof surveySchema>;
