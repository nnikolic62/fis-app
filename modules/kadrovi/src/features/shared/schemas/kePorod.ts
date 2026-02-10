import { z } from "zod";
import { lboSchema, notRequiredString, requiredString } from "./keRadnik";

export const kePorodSchema = z.object({
  radbr: requiredString(6),
  rbr: requiredString(2),
  prezimeR: requiredString(50),
  imeR: requiredString(50),
  srodstvo: requiredString(2),

  srSlovoR: notRequiredString(2),
  devPrezR: notRequiredString(50),
  datumRodjR: z.date().optional(),
  licniBrR: notRequiredString(13),
  ostecen: notRequiredString(1),
  slika: notRequiredString(10),
  status: notRequiredString(3),
  datumPrijaveRzzo: z.date().optional(),
  lboR: lboSchema,
});

export type KePorod = z.infer<typeof kePorodSchema>;
