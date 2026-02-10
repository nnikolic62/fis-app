import { z } from "zod";
import { notRequiredString, requiredString } from "./keRadnik";
import { i18n } from "@repo/i18n-config";
import { KADROVI_NS } from "../../../config/i18n";

export const optionalInt20 = z
  .number()
  .int(i18n.t(`${KADROVI_NS}:errors.ogranicenjeCeoBroj`))
  .min(0)
  .max(99)
  .optional();

export const optionalNumber73 = z
  .number()
  .refine((v) => Number.isFinite(v), i18n.t(`${KADROVI_NS}:errors.ogranicenjeBroj`))
  .refine((v) => Math.abs(v) < 10000, i18n.t(`${KADROVI_NS}:errors.max4PreDecimale`))
  .refine((v) => Number.isInteger(v * 1000), "Dozvoljene su najviše 3 decimale.")
  .optional();

export const optionalNumber62 = z
  .number()
  .refine((v) => Number.isFinite(v), i18n.t(`${KADROVI_NS}:errors.ogranicenjeBroj`))
  .refine((v) => Math.abs(v) < 10000, i18n.t(`${KADROVI_NS}:errors.max4PreDecimale`))
  .refine((v) => Number.isInteger(v * 100), i18n.t(`${KADROVI_NS}:errors.dozovljeno2Decimale`))
  .optional();

export const number142 = z
  .number()
  .refine((v) => Number.isFinite(v), i18n.t(`${KADROVI_NS}:errors.ogranicenjeBroj`))
  .refine((v) => Math.abs(v) < 1e12, i18n.t(`${KADROVI_NS}:errors.max12PreDecimale`))
  .refine((v) => Number.isInteger(v * 100), i18n.t(`${KADROVI_NS}:errors.dozovljeno2Decimale`));

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
  spremabrZaOd: notRequiredString(3),
  daniZaGo: optionalInt20,
  minOsnZaPorez: optionalNumber142,
  spremabrZaRadi: notRequiredString(3),
  sifraZaTrezor: notRequiredString(2),
});

export type KeSprema = z.infer<typeof keSpremaSchema>;
