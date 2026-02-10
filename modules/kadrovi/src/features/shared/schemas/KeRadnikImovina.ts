import { z } from "zod";

export const requiredString = (max: number, requiredMsg = "Obavezno") =>
  z.string().trim().min(1, requiredMsg).max(max, `Polje može imati maksimalno ${max} karaktera.`);

export const keRadnikImovinaSchema = z.object({
  radbr: requiredString(6),
  imovina: requiredString(3),
  rbr: requiredString(2),

  opis: z.string().trim().max(50, "Polje može imati maksimalno 50 karaktera.").optional(),
  vrednost: z.string().trim().max(20, "Polje može imati maksimalno 20 karaktera.").optional(),
  vaziOd: z.date().optional(),
  vaziDo: z.date().optional(),
  napomena: z.string().trim().max(1000, "Polje može imati maksimalno 1000 karaktera.").optional(),
});

export type KeRadnikImovina = z.infer<typeof keRadnikImovinaSchema>;
