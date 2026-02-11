import { z } from "zod";
import { notRequiredString, requiredString } from "./keRadnik";


export const keZanimanjeSchema = z.object({
    zanimanje: requiredString(8),

    naziv: notRequiredString(255),
    skrNaziv: notRequiredString(20)
});

export type Zanimanje = z.infer<typeof keZanimanjeSchema>