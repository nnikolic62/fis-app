import { z } from "zod";

export const requiredString = (max: number, requiredMsg = "Obavezno") =>
  z.string().trim().min(1, requiredMsg).max(max, `Polje može imati maksimalno ${max} karaktera.`);

export const keSlavaSchema = z.object({
  slavabr: requiredString(3),
  slavanaz: requiredString(30),

  datumSlave: z.date().optional(),
  fiksno: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
});

export type KeSlava = z.infer<typeof keSlavaSchema>;
