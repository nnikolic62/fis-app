import { z } from "zod";
import { notRequiredString, requiredString } from "./keRadnik";
import { KADROVI_NS } from "../../../config/i18n";
import { i18n } from "@repo/i18n-config";

export const optionalInt10 = z
  .number()
  .int(i18n.t(`${KADROVI_NS}:errors.ogranicenjeBroj`))
  .min(0)
  .max(9)
  .optional();

export const optionalInt20 = z
  .number()
  .int(i18n.t(`${KADROVI_NS}:errors.ogranicenjeBroj`))
  .min(0)
  .max(99)
  .optional();

export const zrObrJedinicaSchema = z.object({
  obrJedinica: requiredString(12),
  naziv: requiredString(100),
  tip: requiredString(1),

  slika: notRequiredString(10),
  orgbr: notRequiredString(12),
  scrLevel: optionalInt10, // u bazi default 3
  pib: notRequiredString(10),
  sifraDelatnosti: notRequiredString(10),
  maticniBroj: notRequiredString(13),
  ziroRacun: notRequiredString(30),
  partija: notRequiredString(30),
  korbrBanke: notRequiredString(8),
  partijaBanke: notRequiredString(20),
  deoHoldinga: notRequiredString(1),
  opsbrSedista: notRequiredString(5),
  registarskiBroj: notRequiredString(30),
  zaZbirRekapit: notRequiredString(1),
  korbr: notRequiredString(8),
  vpo: notRequiredString(1),
  orgSinonim: notRequiredString(12),
  relacija: notRequiredString(5),
  podrucje: notRequiredString(255),
  adresa: notRequiredString(50),
  ojPlacaAu: notRequiredString(12),
  idSeta: optionalInt20,
});

export type ZrObrJedinica = z.infer<typeof zrObrJedinicaSchema>;
