import { z } from "zod";

export const requiredString = (max: number, requiredMsg = "Obavezno") =>
  z.string().trim().min(1, requiredMsg).max(max, `Polje može imati maksimalno ${max} karaktera.`);

export const optionalInt20 = z
  .number()
  .int("Mora biti ceo broj.")
  .min(0)
  .max(99)
  .optional();

export const KeOpstinaSchema = z.object({
  opsbr: requiredString(5),
  opsnaz: requiredString(25),

  ptt: z.string().trim().max(5, "Polje može imati maksimalno 5 karaktera.").optional(),
  sdkBroj: z.string().trim().max(10, "Polje može imati maksimalno 10 karaktera.").optional(),
  sdkSifra: z.string().trim().max(5, "Polje može imati maksimalno 5 karaktera.").optional(),
  idPodrucneJedinice: z.string().trim().max(5, "Polje može imati maksimalno 5 karaktera.").optional(),
  pioFilijalaRef: z.string().trim().max(5, "Polje može imati maksimalno 5 karaktera.").optional(),
  idRegiona: optionalInt20,
  teritorijaGrada: z.string().trim().max(5, "Polje može imati maksimalno 5 karaktera.").optional(),
  staraOpsbr: z.string().trim().max(5, "Polje može imati maksimalno 5 karaktera.").optional(), // VARCHAR2(5 BYTE)
});

export type KeOpstina = z.infer<typeof KeOpstinaSchema>;
