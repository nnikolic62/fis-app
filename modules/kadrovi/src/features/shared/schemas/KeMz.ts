import { z } from "zod";

export const requiredString = (max: number, requiredMsg = "Obavezno") =>
  z.string().trim().min(1, requiredMsg).max(max, `Polje može imati maksimalno ${max} karaktera.`);

export const optionalInt60 = z
  .number()
  .int("Mora biti ceo broj.")
  .min(0)
  .max(999999)
  .optional();

export const keMzSchema = z.object({
  mzbr: requiredString(4),
  opsbr: requiredString(5),
  mznaziv: requiredString(25),

  mzmesto: z.string().trim().max(25, "Polje može imati maksimalno 25 karaktera.").optional(),
  idMesta: optionalInt60,
});

export type KeMz = z.infer<typeof keMzSchema>;
