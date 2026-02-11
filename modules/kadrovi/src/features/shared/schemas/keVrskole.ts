import { z } from "zod";
import { notRequiredString, requiredString } from "./keRadnik";


export const keVrskoleSchema = z.object({
    vrskobr: requiredString(4),

    vrskonaz: notRequiredString(60),
    strukabr: notRequiredString(3)
});


export type Vrskole = z.infer<typeof keVrskoleSchema>;