import { z } from "zod";

const startOfDay = (value: Date) => new Date(value.getFullYear(), value.getMonth(), value.getDate());
const isBeforeSysDate = (value?: Date) =>
    !value || value < startOfDay(new Date());

export const datRodjSchema = z.date()
    .optional()
    .refine(isBeforeSysDate, "Datum rodjenja mora biti manji od sistemskog datuma.");

export const requiredString = (max: number, requiredMsg = "Obavezno") =>
  z.string().trim().min(1, requiredMsg).max(max, `Polje može imati maksimalno ${max} karaktera.`);


export const radbrSchema = z.string()
    .min(1, "Obavezno")
    .regex(/^\d+$/, "Radnik broj mora sadržati samo cifre.")
    .transform((v) => v.trim())
    .transform((v) => v.replace(/\s+/g, "")) // skida whitespace u unutrasnjosti stringa
    .transform((v) => v.replace(/^0+/, "")) // skida nule sa pocetka stringa (ovo je bilo u fisu)


// U validaciji polja treba jos proveriti da li postoji lbo u bazi ako postoji vraca error da postoji
export const lboSchema = z.string()                  
    .trim()
    .regex(/^\d+$/, "LBO mora sadržati samo cifre.")
    .length(11, "LBO mora imati tačno 11 cifara.")
    .optional()

export const keRadnikSchema = z.object({
    radbr: radbrSchema,
    organizacionaJedinica: z.string().max(12, "Polje može imati maksimalno 12 karaktera.").optional(),
    preizme: requiredString(100),
    ime: requiredString(100),
    srSlovo: z.string().max(2, "Polje može imati maksimalno 2 karaktera.").optional(),
    roditelj: z.string().max(20, "Polje može imati maksimalno 20 karaktera.").optional(),
    devPrez: z.string().max(20, "Polje može imati maksimalno 20 karaktera.").optional(),
    datRodj: datRodjSchema,
    pol: requiredString(1),
    licniBr: z.string().max(13, "Polje može imati maksimalno 13 karaktera.").optional(),
    opsrbr: z.string().max(5, "Polje može imati maksimalno 5 karaktera.").optional(),
    opsbr: requiredString(5),
    mzbr: requiredString(4),
    adresa: z.string().max(40, "Polje može imati maksimalno 40 karaktera.").optional(),
    telefon: z.string().max(30, "Polje može imati maksimalno 30 karaktera.").optional(),
    statusbr: requiredString(1),
    spremabr: requiredString(3),
    verabr: z.string().max(3, "Polje može imati maksimalno 3 karaktera.").optional(),
    nacbr: z.string().max(3, "Polje može imati maksimalno 3 karaktera.").optional(),
    slavabr: z.string().max(3, "Polje može imati maksimalno 3 karaktera.").optional(),
    datumDol: z.date().optional(),
    datumOdl: z.date().optional(),
    bracnoStanje: z.string().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
    slika: z.string().max(6, "Polje može imati maksimalno 6 karaktera.").optional(),
    zastareo: z.string().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
    datum: z.date(),
    radbrref: z.string().max(6, "Polje može imati maksimalno 6 karaktera.").optional(),
    spremabrInt: z.string().max(3, "Polje može imati maksimalno 3 karaktera.").optional(),
    opsbrRada: z.string().max(5, "Polje može imati maksimalno 5 karaktera.").optional(),
    username: z.string().max(30, "Polje može imati maksimalno 30 karaktera.").optional(),
    nadzor: z.number().optional(),
    obrJedinica: z.string().max(12, "Polje može imati maksimalno 12 karaktera.").optional(),
    stevbr: z.string().max(6, "Polje može imati maksimalno 6 karaktera.").optional(),
    sortniPojam: z.string().max(50, "Polje može imati maksimalno 50 karaktera.").optional(),
    samohran: z.string().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
    titula: z.string().max(10, "Polje može imati maksimalno 10 karaktera.").optional(),
    lbo: lboSchema,
    mail: z.email().max(255, "Polje može imati maksimalno 255 karaktera.").optional(),
    externalUsername: z.string().max(255, "Polje može imati maksimalno 255 karaktera.").optional(),
    jeStranac: z.string().max(1, "Polje može imati maksimalno 1 karaktera.").optional(),
    brojlk: z.string().max(50, "Polje može imati maksimalno 50 karaktera.").optional(),
});

export type Radnik = z.infer<typeof keRadnikSchema>;