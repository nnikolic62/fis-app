import { z } from "zod";

export const requiredString = (max: number, requiredMsg = "Obavezno") =>
  z.string().trim().min(1, requiredMsg).max(max, `Polje može imati maksimalno ${max} karaktera.`);

export const optionalInt30 = z
  .number()
  .int("Mora biti ceo broj.")
  .min(0)
  .max(999)
  .optional();

export const optionalInt50 = z
  .number()
  .int("Mora biti ceo broj.")
  .min(0)
  .max(99999)
  .optional();

export const optionalNumber73 = z
  .number()
  .refine((v) => Number.isFinite(v), "Mora biti broj.")
  .refine((v) => Math.abs(v) < 10000, "Maksimalno 4 cifre pre decimale.")
  .refine((v) => Number.isInteger(v * 1000), "Dozvoljene su najviše 3 decimale.")
  .optional();

export const keTipResenjaSchema = z.object({
  trbr: requiredString(3),

  trnaz: z.string().trim().max(45, "Polje može imati maksimalno 45 karaktera.").optional(),
  kplobr: z.string().trim().max(5, "Polje može imati maksimalno 5 karaktera.").optional(),
  trRok: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  staz: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  trTrajanje: optionalInt50,
  mirovanje: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  oznrad: z.string().trim().max(4, "Polje može imati maksimalno 4 karaktera.").optional(),
  godOdm: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  bolovanje: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  naslov: z.string().trim().max(30, "Polje može imati maksimalno 30 karaktera.").optional(),
  vrstaIzv: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  jeOsnovniUgovor: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  forma: z.string().trim().max(10, "Polje može imati maksimalno 10 karaktera.").optional(),
  poPlanuReda: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  oznradZaSmenskiRad: z.string().trim().max(3, "Polje može imati maksimalno 3 karaktera.").optional(),
  idVd: optionalInt30,
  tipAutora: z.string().trim().max(3, "Polje može imati maksimalno 3 karaktera.").optional(),
  poUgovoru: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  maxTrajanje: optionalInt30,
  goKrajGodine: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  defaultObrazlozenje: z.string().trim().max(3, "Polje može imati maksimalno 3 karaktera.").optional(),
  pretTrbrZaGo: z.string().trim().max(3, "Polje može imati maksimalno 3 karaktera.").optional(),
  ulaziUVremenskiStaz: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  jeOdsustvovao: z.string().trim().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
  procRefundPor: optionalNumber73,
  minTrajanje: optionalInt30,
});

export type KeTipResenja = z.infer<typeof keTipResenjaSchema>;
