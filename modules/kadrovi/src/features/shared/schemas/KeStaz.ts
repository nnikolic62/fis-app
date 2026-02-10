import { z } from "zod";

export const requiredString = (max: number, requiredMsg = "Obavezno") =>
  z.string().trim().min(1, requiredMsg).max(max, `Polje može imati maksimalno ${max} karaktera.`);

export const optionalInt10 = z
  .number()
  .int("Mora biti ceo broj.")
  .min(0)
  .max(9)
  .optional();

export const int20 = z.number().int("Mora biti ceo broj.").min(0).max(99);
export const optionalInt20 = int20.optional();

export const optionalInt30 = z
  .number()
  .int("Mora biti ceo broj.")
  .min(0)
  .max(999)
  .optional();

export const optionalInt40 = z
  .number()
  .int("Mora biti ceo broj.")
  .min(0)
  .max(9999)
  .optional();

export const optionalNumber42 = z
  .number()
  .refine((v) => Number.isFinite(v), "Mora biti broj.")
  .refine((v) => Math.abs(v) < 100, "Maksimalno 2 cifre pre decimale.")
  .refine((v) => Number.isInteger(v * 100), "Dozvoljene su najviše 2 decimale.")
  .optional();

export const optionalNumber122 = z
  .number()
  .refine((v) => Number.isFinite(v), "Mora biti broj.")
  .refine((v) => Math.abs(v) < 1e10, "Previše cifara (max 10 pre decimale).")
  .refine((v) => Number.isInteger(v * 100), "Dozvoljene su najviše 2 decimale.")
  .optional();

export const number135 = z
  .number()
  .refine((v) => Number.isFinite(v), "Mora biti broj.")
  .refine((v) => Math.abs(v) < 1e8, "Previše cifara (max 8 pre decimale).")
  .refine((v) => Number.isInteger(v * 100000), "Dozvoljene su najviše 5 decimala.");

export const optionalNumber135 = number135.optional();

export const optionalNumber155 = z
  .number()
  .refine((v) => Number.isFinite(v), "Mora biti broj.")
  .refine((v) => Math.abs(v) < 1e10, "Previše cifara (max 10 pre decimale).")
  .refine((v) => Number.isInteger(v * 100000), "Dozvoljene su najviše 5 decimala.")
  .optional();

export const keStazSchema = z.object({
  radbr: requiredString(6),
  trbr: requiredString(3),
  orgbr: requiredString(12),
  posbr: requiredString(6),
  datzap: z.date(),
  benMeseci: int20,
  stOsnov: number135,
  radbrref: requiredString(6),
  datum: z.date(),
  katbr: requiredString(3),
  opsbrRada: requiredString(5),
  obrJedinica: requiredString(12),

  resbr: z.string().trim().max(12, "Polje može imati maksimalno 12 karaktera.").optional(),
  datotp: z.date().optional(),
  vrstaObraz: z.string().trim().max(3, "Polje može imati maksimalno 3 karaktera.").optional(),
  scrLevel: optionalInt10, // u bazi default 3
  dnevniFondSati: optionalNumber42,
  poUgovoru: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  stOsnovDev: optionalNumber135,
  osnZaradaJePoGrupi: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  grupabr: z.string().trim().max(4, "Polje može imati maksimalno 4 karaktera.").optional(),
  osnovnaZarada: optionalNumber155,
  povecanje: optionalNumber122,
  fiksniDeo: optionalNumber122,
  idValute: optionalInt30,
  skracenoRv: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  zavod: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  strajk: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  visak: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  opsbrLokacija: z.string().trim().max(5, "Polje može imati maksimalno 5 karaktera.").optional(),
  JjeNetoStOsnov: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  osnZaradaJeUOpsegu: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  idVRsteUgovora: optionalInt30,
  ustanova: z.string().trim().max(8, "Polje može imati maksimalno 8 karaktera.").optional(),
  zamenjenRadnik: z.string().trim().max(6, "Polje može imati maksimalno 6 karaktera.").optional(),
  rbrAneksa: optionalInt40,
});

export type KeStaz = z.infer<typeof keStazSchema>;
