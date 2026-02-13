import { z } from "zod";

export const keKategorijaSchema = z.object({
  katbr: z.string(),
  katnaz: z.string(),

  plata: z.string(),
  zavod: z.string(),

  dodDaniOdmora: z
    .number()
    .min(0)
    .max(365),

  procInv: z
    .number()
    .min(0)
    .max(100),

  invalid: z.string(),
  procenatZaPripravnike: z
    .number()
    .min(0)
    .max(100)
    .optional(),

  vrstaMinulogRada: z.string(),
  ulaziUStaz: z.string(),
  nemaZasnovanRadniOdnos: z.string(),
  neUlaziUProsekZaPorodilje: z.string(),
  jeInvalidZaPppPd: z.string(),
});

export type KeKategorija = z.infer<typeof keKategorijaSchema>;