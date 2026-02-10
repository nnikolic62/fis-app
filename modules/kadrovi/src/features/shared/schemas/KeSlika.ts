import { z } from "zod";

export const requiredString = (max: number, requiredMsg = "Obavezno") =>
  z.string().trim().min(1, requiredMsg).max(max, `Polje može imati maksimalno ${max} karaktera.`);

export const optionalInt30 = z
  .number()
  .int("Mora biti ceo broj.")
  .min(0)
  .max(999)
  .optional();

export const longRawSchema = z
  .union([z.string(), z.instanceof(Uint8Array)])
  .optional();

export const keSlikaSchema = z.object({
  slika: requiredString(6),
  nazivSlike: requiredString(20),
  tipSlike: requiredString(10),

  sirina: optionalInt30,
  visina: optionalInt30,
//   slika: longRawSchema,
});

export type KeSlika = z.infer<typeof keSlikaSchema>;
