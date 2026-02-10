import { z } from "zod";
import { requiredString } from "./keRadnik";
import { KADROVI_NS } from "../../../config/i18n";
import { i18n } from "@repo/i18n-config";


export const optionalInt30 = z
  .number()
  .int(i18n.t(`${KADROVI_NS}:errors.ogranicenjeCeoBroj`))
  .min(0)
  .max(999)
  .optional();

export const longRawSchema = z
  .union([z.string(), z.instanceof(Uint8Array)])
  .optional();

export const keSlikaSchema = z.object({
  slika: requiredString(6),
  nazivSlike: requiredString(20),
  tipSlike: requiredString(10),

  sirina: optionalInt30,
  visina: optionalInt30,
//   slika: longRawSchema,
});

export type KeSlika = z.infer<typeof keSlikaSchema>;
