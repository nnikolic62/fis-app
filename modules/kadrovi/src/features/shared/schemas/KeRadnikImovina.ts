import { z } from "zod";
import { notRequiredString, requiredString } from "./keRadnik";


export const keRadnikImovinaSchema = z.object({
  radbr: requiredString(6),
  imovina: requiredString(3),
  rbr: requiredString(2),

  opis: notRequiredString(50) 
,
  vrednost: notRequiredString(20) 
,
  vaziOd: z.date().optional(),
  vaziDo: z.date().optional(),
  napomena: notRequiredString(1000) 
,
});

export type KeRadnikImovina = z.infer<typeof keRadnikImovinaSchema>;
