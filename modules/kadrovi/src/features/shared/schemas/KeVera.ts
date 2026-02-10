import { z } from "zod";

export const requiredString = (max: number, requiredMsg = "Obavezno") =>
  z.string().trim().min(1, requiredMsg).max(max, `Polje može imati maksimalno ${max} karaktera.`);

export const KeVeraSchema = z.object({
  verabr: requiredString(3),
  veranaz: requiredString(30),
});

export type KeVera = z.infer<typeof KeVeraSchema>;
