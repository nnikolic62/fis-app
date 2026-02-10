import { z } from "zod";
import { requiredString } from "./keRadnik";


export const keVeraSchema = z.object({
  verabr: requiredString(3),
  veranaz: requiredString(30),
});

export type KeVera = z.infer<typeof keVeraSchema>;
