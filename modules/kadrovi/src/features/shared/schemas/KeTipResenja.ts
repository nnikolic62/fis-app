import { z } from "zod";
import { notRequiredString, requiredString } from "./keRadnik";
import { i18n } from "@repo/i18n-config";
import { KADROVI_NS } from "../../../config/i18n";

export const optionalInt30 = z
  .number()
  .int(i18n.t(`${KADROVI_NS}:errors.ogranicenjeCeoBroj`))
  .min(0)
  .max(999)
  .optional();

export const optionalInt50 = z
  .number()
  .int(i18n.t(`${KADROVI_NS}:errors.ogranicenjeCeoBroj`))
  .min(0)
  .max(99999)
  .optional();

export const optionalNumber73 = z
  .number()
  .refine((v) => Number.isFinite(v), i18n.t(`${KADROVI_NS}:errors.ogranicenjeBroj`))
  .refine((v) => Math.abs(v) < 10000, i18n.t(`${KADROVI_NS}:errors.max4PreDecimale`))
  .refine((v) => Number.isInteger(v * 1000), i18n.t(`${KADROVI_NS}:errors.dozovljeno3Decimale`))
  .optional();

export const keTipResenjaSchema = z.object({
  trbr: requiredString(3),

  trnaz: notRequiredString(45),
  kplobr: notRequiredString(5),
  trRok: notRequiredString(1),
  staz: notRequiredString(1),
  trTrajanje: optionalInt50,
  mirovanje: notRequiredString(1),
  oznrad: notRequiredString(4),
  godOdm: notRequiredString(1),
  bolovanje: notRequiredString(1),
  naslov: notRequiredString(30),
  vrstaIzv: notRequiredString(1),
  jeOsnovniUgovor: notRequiredString(1),
  forma: notRequiredString(10),
  poPlanuReda: notRequiredString(1),
  oznradZaSmenskiRad: notRequiredString(3),
  idVd: optionalInt30,
  tipAutora: notRequiredString(3),
  poUgovoru: notRequiredString(1),
  maxTrajanje: optionalInt30,
  goKrajGodine: notRequiredString(1),
  defaultObrazlozenje: notRequiredString(3),
  pretTrbrZaGo: notRequiredString(3),
  ulaziUVremenskiStaz: notRequiredString(1),
  jeOdsustvovao: notRequiredString(1),
  procRefundPor: optionalNumber73,
  minTrajanje: optionalInt30,
});

export type KeTipResenja = z.infer<typeof keTipResenjaSchema>;
