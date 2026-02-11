import { z } from "zod";
import { notRequiredString, requiredString } from "./keRadnik";


export const keSmer = z.object({
    vrskobr: requiredString(4),
    smer: requiredString(2),

    smerNaziv: notRequiredString(250)
});

export type Smer = z.infer<typeof keSmer>;