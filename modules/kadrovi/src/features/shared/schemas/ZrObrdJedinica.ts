import { z } from "zod";

export const requiredString = (max: number, requiredMsg = "Obavezno") =>
  z.string().trim().min(1, requiredMsg).max(max, `Polje može imati maksimalno ${max} karaktera.`);

export const optionalInt10 = z
  .number()
  .int("Mora biti ceo broj.")
  .min(0)
  .max(9)
  .optional();

export const optionalInt20 = z
  .number()
  .int("Mora biti ceo broj.")
  .min(0)
  .max(99)
  .optional();

export const ZrObrJedinicaSchema = z.object({
  obrJedinica: requiredString(12),
  naziv: requiredString(100),
  tip: requiredString(1),

  slika: z.string().trim().max(10, "Polje može imati maksimalno 10 karaktera.").optional(),
  orgbr: z.string().trim().max(12, "Polje može imati maksimalno 12 karaktera.").optional(),
  scrLevel: optionalInt10, // u bazi default 3
  pib: z.string().trim().max(10, "Polje može imati maksimalno 10 karaktera.").optional(),
  sifraDelatnosti: z.string().trim().max(10, "Polje može imati maksimalno 10 karaktera.").optional(),
  maticniBroj: z.string().trim().max(13, "Polje može imati maksimalno 13 karaktera.").optional(),
  ziroRacun: z.string().trim().max(30, "Polje može imati maksimalno 30 karaktera.").optional(),
  partija: z.string().trim().max(30, "Polje može imati maksimalno 30 karaktera.").optional(),
  korbrBanke: z.string().trim().max(8, "Polje može imati maksimalno 8 karaktera.").optional(),
  partijaBanke: z.string().trim().max(20, "Polje može imati maksimalno 20 karaktera.").optional(),
  deoHoldinga: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  opsbrSedista: z.string().trim().max(5, "Polje može imati maksimalno 5 karaktera.").optional(),
  registarskiBroj: z.string().trim().max(30, "Polje može imati maksimalno 30 karaktera.").optional(),
  zaZbirRekapit: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  korbr: z.string().trim().max(8, "Polje može imati maksimalno 8 karaktera.").optional(),
  vpo: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  orgSinonim: z.string().trim().max(12, "Polje može imati maksimalno 12 karaktera.").optional(),
  relacija: z.string().trim().max(5, "Polje može imati maksimalno 5 karaktera.").optional(),
  podrucje: z.string().trim().max(255, "Polje može imati maksimalno 255 karaktera.").optional(),
  adresa: z.string().trim().max(50, "Polje može imati maksimalno 50 karaktera.").optional(),
  ojPlacaAu: z.string().trim().max(12, "Polje može imati maksimalno 12 karaktera.").optional(),
  idSeta: optionalInt20,
});

export type ZrObrJedinica = z.infer<typeof ZrObrJedinicaSchema>;
