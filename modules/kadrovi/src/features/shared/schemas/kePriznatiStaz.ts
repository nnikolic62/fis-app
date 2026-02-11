import { z } from "zod";
import { requiredString } from "./keRadnik";
import { i18n } from "@repo/i18n-config";
import { KADROVI_NS } from "../../../config/i18n";

export const number30 = z
  .number()
  .int(i18n.t(`${KADROVI_NS}:errors.ogranicenjeCeoBroj`))
  .min(0)
  .max(999)


  export const number20 = z
  .number()
  .int(i18n.t(`${KADROVI_NS}:errors.ogranicenjeCeoBroj`))
  .min(0)
  .max(99)


  export const number92 = z
  .number(i18n.t(`${KADROVI_NS}:errors.obavezno`))
  .refine((v) => Number.isFinite(v), i18n.t(`${KADROVI_NS}:errors.ogranicenjeBroj`))
  .refine((v) => Math.abs(v) < 10_000_000, i18n.t(`${KADROVI_NS}:errors.max7PreDecimale`)) 
  .refine((v) => Number.isInteger(v * 100), i18n.t(`${KADROVI_NS}:errors.dozovljeno2Decimale`));

export const kePriznatiStazSchema = z.object({
    radbr: requiredString(6),
    rbr: number30,
    priznatoGodina: number20,
    priznatoMeseci: number20,
    priznatoDana: number20,
    ukupnoMeseci: number92, 
    datumPriznavanja: z.date({message: i18n.t(`${KADROVI_NS}:errors.obavezno`)})

})