import { z } from "zod";

export const requiredString = (max: number, requiredMsg = "Obavezno") =>
  z.string().trim().min(1, requiredMsg).max(max, `Polje može imati maksimalno ${max} karaktera.`);

export const optionalInt20 = z
  .number()
  .int("Mora biti ceo broj.")
  .min(0)
  .max(99)
  .optional();

export const optionalNumber73 = z
  .number()
  .refine((v) => Number.isFinite(v), "Mora biti broj.")
  .refine((v) => Math.abs(v) < 10000, "Maksimalno 4 cifre pre decimale.")
  .refine((v) => Number.isInteger(v * 1000), "Dozvoljene su najviše 3 decimale.")
  .optional();

export const optionalNumber62 = z
  .number()
  .refine((v) => Number.isFinite(v), "Mora biti broj.")
  .refine((v) => Math.abs(v) < 10000, "Maksimalno 4 cifre pre decimale.")
  .refine((v) => Number.isInteger(v * 100), "Dozvoljene su najviše 2 decimale.")
  .optional();

export const number142 = z
  .number()
  .refine((v) => Number.isFinite(v), "Mora biti broj.")
  .refine((v) => Math.abs(v) < 1e12, "Previše cifara (max 12 pre decimale).")
  .refine((v) => Number.isInteger(v * 100), "Dozvoljene su najviše 2 decimale.");

export const optionalNumber142 = number142.optional();

export const keSpremaSchema = z.object({
  spremabr: requiredString(3),
  spremanaz: requiredString(40),
  stepen: requiredString(6),
  minNeto: number142,
  minZaPio: number142,

  koeficijent: optionalNumber73,
  startOsnovniMin: optionalNumber62,
  startOsnovniMax: optionalNumber62,
  startKorektivniMin: optionalNumber62,
  startKorektivniMax: optionalNumber62,
  spremabrZaOd: z.string().trim().max(3, "Polje može imati maksimalno 3 karaktera.").optional(),
  daniZaGo: optionalInt20,
  minOsnZaPorez: optionalNumber142,
  spremabrZaRadi: z.string().trim().max(3, "Polje može imati maksimalno 3 karaktera.").optional(),
  sifraZaTrezor: z.string().trim().max(2, "Polje može imati maksimalno 2 karaktera.").optional(),
});

export type KeSprema = z.infer<typeof keSpremaSchema>;
