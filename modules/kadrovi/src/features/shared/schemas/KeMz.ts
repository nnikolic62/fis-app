import { z } from "zod";
import { notRequiredString, requiredString } from "./keRadnik";


export const optionalInt60 = z
  .number()
  .int("Mora biti ceo broj.")
  .min(0)
  .max(999999)
  .optional();

export const keMzSchema = z.object({
  mzbr: requiredString(4),
  opsbr: requiredString(5),
  mznaziv: requiredString(25),

  mzmesto: notRequiredString(25),
  idMesta: optionalInt60,
});

export type KeMz = z.infer<typeof keMzSchema>;
