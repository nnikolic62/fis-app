import { z } from "zod";

export const requiredString = (max: number, requiredMsg = "Obavezno") =>
  z.string().trim().min(1, requiredMsg).max(max, `Polje može imati maksimalno ${max} karaktera.`);

export const KeNacijaSchema = z.object({
  nzcbr: requiredString(3),
  nacnaz: requiredString(30),
});

export type KeNacija = z.infer<typeof KeNacijaSchema>;
