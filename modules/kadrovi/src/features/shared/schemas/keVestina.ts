import { z } from "zod";
import { notRequiredString, requiredString } from "./keRadnik";
import { optionalInt50 } from "./keTipResenja";



export const keVestinaSchema = z.object({
    vestinabr: requiredString(4),
    vestinaNaz: requiredString(200),

    vrsta: notRequiredString(5),
    vendor: notRequiredString(255),
    proizvodnaLinija: notRequiredString(255),
    jeObuka: notRequiredString(1),
    organizator: notRequiredString(255),
    cena: notRequiredString(255),
    trajanje: optionalInt50
})


export type KeVestina = z.infer<typeof keVestinaSchema>;