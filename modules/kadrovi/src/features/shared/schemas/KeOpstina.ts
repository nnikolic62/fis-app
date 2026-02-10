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

export const keOpstinaSchema = z.object({
  opsbr: requiredString(5),
  opsnaz: requiredString(25),

  ptt: notRequiredString(5),
  sdkBroj: notRequiredString(10),
  sdkSifra: notRequiredString(5),
  idPodrucneJedinice: notRequiredString(5),
  pioFilijalaRef: notRequiredString(5),
  idRegiona: optionalInt20,
  teritorijaGrada: notRequiredString(5),
  staraOpsbr: notRequiredString(5),
});

export type KeOpstina = z.infer<typeof keOpstinaSchema>;
