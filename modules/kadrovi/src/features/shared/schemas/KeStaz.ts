import { z } from "zod";
import { notRequiredString, requiredString } from "./keRadnik";
import { optionalInt10 } from "./zrObrdJedinica";
import { i18n } from "@repo/i18n-config";
import { KADROVI_NS } from "../../../config/i18n";
import { optionalInt30 } from "./keSlika";
import { optionalNumber42 } from "./keSkole";


export const int20 = z.number().int(i18n.t(`${KADROVI_NS}:errors.ogranicenjeCeoBroj`)).min(0).max(99);
export const optionalInt20 = int20.optional();


export const optionalInt40 = z
  .number()
  .int(i18n.t(`${KADROVI_NS}:errors.ogranicenjeCeoBroj`))
  .min(0)
  .max(9999)
  .optional();

export const optionalNumber122 = z
  .number()
  .refine((v) => Number.isFinite(v), i18n.t(`${KADROVI_NS}:errors.ogranicenjeBroj`))
  .refine((v) => Math.abs(v) < 1e10, i18n.t(`${KADROVI_NS}:errors.max10PreDecimale`))
  .refine((v) => Number.isInteger(v * 100), i18n.t(`${KADROVI_NS}:errors.dozovljeno2Decimale`))
  .optional();

export const number135 = z
  .number()
  .refine((v) => Number.isFinite(v), i18n.t(`${KADROVI_NS}:errors.ogranicenjeBroj`))
  .refine((v) => Math.abs(v) < 1e8, i18n.t(`${KADROVI_NS}:errors.max8PreDecimale`))
  .refine((v) => Number.isInteger(v * 100000), i18n.t(`${KADROVI_NS}:errors.dozovljeno5Decimale`));

export const optionalNumber135 = number135.optional();

export const optionalNumber155 = z
  .number()
  .refine((v) => Number.isFinite(v), i18n.t(`${KADROVI_NS}:errors.ogranicenjeBroj`))
  .refine((v) => Math.abs(v) < 1e10, i18n.t(`${KADROVI_NS}:errors.max10PreDecimale`))
  .refine((v) => Number.isInteger(v * 100000), i18n.t(`${KADROVI_NS}:errors.dozovljeno5Decimale`))
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

  resbr: notRequiredString(12) 
,
  datotp: z.date().optional(),
  vrstaObraz: notRequiredString(3) 
,
  scrLevel: optionalInt10, // u bazi default 3
  dnevniFondSati: optionalNumber42,
  poUgovoru: notRequiredString(1) 
,
  stOsnovDev: optionalNumber135,
  osnZaradaJePoGrupi: notRequiredString(1) 
,
  grupabr: notRequiredString(4) 
,
  osnovnaZarada: optionalNumber155,
  povecanje: optionalNumber122,
  fiksniDeo: optionalNumber122,
  idValute: optionalInt30,
  skracenoRv: notRequiredString(1),
  zavod: notRequiredString(1),
  strajk: notRequiredString(1),
  visak: notRequiredString(1),
  opsbrLokacija: notRequiredString(5),
  JjeNetoStOsnov: notRequiredString(1),
  osnZaradaJeUOpsegu: notRequiredString(1),
  idVRsteUgovora: optionalInt30,
  ustanova: notRequiredString(8),
  zamenjenRadnik: notRequiredString(6),
  rbrAneksa: optionalInt40,
});

export type KeStaz = z.infer<typeof keStazSchema>;
