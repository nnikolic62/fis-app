import { z } from "zod";
import { requiredString } from "./keRadnik";




export const keGrupaVestinaSchema = z.object({
    grupaVestina: requiredString(4),
    vestina: requiredString(4)
});


export type Vestina = z.infer<typeof keGrupaVestinaSchema>;