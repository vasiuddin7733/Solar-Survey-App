import { z } from "zod";

export const surveySchema = z.object({
  propertyType: z.enum(
    ["Einfamilienhaus", "Mehrfamilienhaus", "Gewerbeimmobilie"] as const,
    {
      error: "Select a property type",
    }
  ),
  roofOrientation: z
    .array(z.enum(["Süd", "West", "Ost", "Nord"] as const))
    .optional(),
  roofAge: z.enum(
    ["Unter 5 Jahre", "5–15 Jahre", "Über 15 Jahre", "Keine Angabe"] as const,
    {
      error: "Select roof age",
    }
  ),
  electricityUsage: z.enum(
    [
      "Unter 3.000 kWh",
      "3.000–5.000 kWh",
      "Über 5.000 kWh",
      "Keine Angabe",
    ] as const,
    {
      error: "Select electricity usage",
    }
  ),
  otherSolutions: z.enum(["Ja", "Nein", "dontknow"] as const, {
    error: "Select an option",
  }),
  name: z.string().max(100).optional(),
  email: z.string().email("Invalid email").optional(),
  phone: z
    .string()
    .regex(/^\+?[0-9\s-]{7,15}$/, "Invalid phone number")
    .optional(),
});

export type SurveyData = z.infer<typeof surveySchema>;
