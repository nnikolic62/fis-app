import { z } from "zod";
import { notRequiredString, requiredString } from "./keRadnik";
import { i18n } from "@repo/i18n-config";
import { KADROVI_NS } from "../../../config/i18n";
import { Vrskole } from "./keVrskole";

export const optionalNumber42 = z
  .number()
  .refine((v) => Number.isFinite(v), i18n.t(`${KADROVI_NS}:errors.ogranicenjeBroj`))
  .refine((v) => Math.abs(v) < 100, i18n.t(`${KADROVI_NS}:errors.max4PreDecimale`))
  .refine((v) => Number.isInteger(v * 100), i18n.t(`${KADROVI_NS}:errors.dozovljeno2Decimale`))
  .optional();

  
export const keSkoleSchema = z.object({
    radbr: requiredString(6),
    vrskobr: requiredString(4),
    spremabr: requiredString(3),

    
    broj: notRequiredString(10),
    datumDip: z.date().optional(),
    prosek: optionalNumber42,
    internaSprema: notRequiredString(1),
    datumUpisa: z.date().optional(),
    skola: notRequiredString(7),
    zanimanje: notRequiredString(8),
    smer: notRequiredString(2),
    strukabr: notRequiredString(3)
})


export type Skole = z.infer<typeof keSkoleSchema>;