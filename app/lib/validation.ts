import { solarOptions } from "@/components/survey/solarOptions";
import { z } from "zod";

export const surveySchema = z.object({
  immobilienart: z.enum(solarOptions.immobilienart, {
    message: "Bitte wählen Sie die Art der Immobilie aus",
  }),
  ausrichtung: z.array(
    z.enum(solarOptions.ausrichtung, {
      message: "Bitte wählen Sie mindestens eine Ausrichtung aus",
    })
  ),
  dachalter: z.enum(solarOptions.dachalter, {
    message: "Bitte wählen Sie das Dachalter aus",
  }),
  stromverbrauch: z.enum(solarOptions.stromverbrauch, {
    message: "Bitte wählen Sie den Stromverbrauch aus",
  }),
  solaranlage: z.enum(solarOptions.solaranlage, {
    message: "Bitte wählen Sie eine Option aus",
  }),
  name: z.string().max(100).optional(),
  email: z.string().email("Ungültige E-Mail-Adresse").optional(),
  phone: z
    .string()
    .regex(/^\+?[0-9\s-]{7,15}$/, "Ungültige Telefonnummer")
    .optional(),
});

export type SurveyData = z.infer<typeof surveySchema>;
