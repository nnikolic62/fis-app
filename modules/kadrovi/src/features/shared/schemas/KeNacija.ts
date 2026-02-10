import { z } from "zod";
import { requiredString } from "./keRadnik";


export const keNacijaSchema = z.object({
  nzcbr: requiredString(3),
  nacnaz: requiredString(30),
});

export type KeNacija = z.infer<typeof keNacijaSchema>;
