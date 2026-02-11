import { z } from "zod";
import { notRequiredString, requiredString } from "./keRadnik";


export const keSkolaUstanovaSchema = z.object({
    skola: requiredString(7),
    nazivSkole: requiredString(100),

    opsbr: notRequiredString(5),
    mzbr: notRequiredString(4)
});

export type SkolaUstanova = z.infer<typeof keSkolaUstanovaSchema>;