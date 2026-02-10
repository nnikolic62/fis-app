import { z } from "zod";
import { notRequiredString, requiredString } from "./keRadnik";


export const keSlavaSchema = z.object({
  slavabr: requiredString(3),
  slavanaz: requiredString(30),

  datumSlave: z.date().optional(),
  fiksno: notRequiredString(1) 
,
});

export type KeSlava = z.infer<typeof keSlavaSchema>;
