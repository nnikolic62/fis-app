import { i18n } from "@repo/i18n-config";
import { z } from "zod";
import { KADROVI_NS } from "../../../config/i18n";

const startOfDay = (value: Date) => new Date(value.getFullYear(), value.getMonth(), value.getDate());
const isBeforeSysDate = (value?: Date) =>
    !value || value < startOfDay(new Date());

export const datRodjSchema = z.date()
    .optional()
    .refine(isBeforeSysDate, i18n.t(`${KADROVI_NS}:errors.datumROdjenjaVeciOdDanasnjeg`));

export const requiredString = (max: number, requiredMsg = i18n.t(`${KADROVI_NS}:errors.obavezno`)) =>
  z.string().trim().min(1, requiredMsg).max(max, `${i18n.t(`${KADROVI_NS}:errors.ogranicenjePolja`)} ${max} ${i18n.t(`${KADROVI_NS}:errors.karaktera`)}`);

export const notRequiredString = (max: number) => 
    z.string().max(max, `${i18n.t(`${KADROVI_NS}:errors.ogranicenjePolja`)} ${max} ${i18n.t(`${KADROVI_NS}:errors.karaktera`)}`).optional()


export const radbrSchema = z.string()
    .min(1, i18n.t(`${KADROVI_NS}:errors.obavezno`))
    .regex(/^\d+$/, i18n.t(`${KADROVI_NS}:errors.radnikSamoCifre`))
    .transform((v) => v.trim())
    .transform((v) => v.replace(/\s+/g, "")) // skida whitespace u unutrasnjosti stringa
    .transform((v) => v.replace(/^0+/, "")) // skida nule sa pocetka stringa (ovo je bilo u fisu)


// U validaciji polja treba jos proveriti da li postoji lbo u bazi ako postoji vraca error da postoji
export const lboSchema = z.string()                  
    .trim()
    .regex(/^\d+$/, i18n.t(`${KADROVI_NS}:errors.lboSamoCIfre`))
    .length(11, i18n.t(`${KADROVI_NS}:errors.lbo11Cifara`))
    .optional()

export const licniBrSchema = z.string()
    .trim()
    .regex(/^\d+$/, i18n.t(`${KADROVI_NS}:errors.licniBrSamoCIfre`))
    .length(13, i18n.t(`${KADROVI_NS}:errors.licniBr13Cifara`))
    .optional()

export const keRadnikSchema = z.object({
    radbr: radbrSchema,
    organizacionaJedinica: notRequiredString(12),
    preizme: requiredString(100),
    ime: requiredString(100),
    srSlovo: notRequiredString(2),
    roditelj: notRequiredString(20),
    devPrez: notRequiredString(20),
    datRodj: datRodjSchema,
    pol: requiredString(1),
    licniBr: licniBrSchema,
    opsrbr: notRequiredString(5),
    opsbr: requiredString(5),
    mzbr: requiredString(4),
    adresa: notRequiredString(40),
    telefon: notRequiredString(30),
    statusbr: requiredString(1),
    spremabr: requiredString(3),
    verabr: notRequiredString(3),
    nacbr: notRequiredString(3),
    slavabr: notRequiredString(3),
    datumDol: z.date().optional(),
    datumOdl: z.date().optional(),
    bracnoStanje: notRequiredString(1),
    slika: notRequiredString(6),
    zastareo: notRequiredString(1),
    datum: z.date(i18n.t(`${KADROVI_NS}:errors.obavezno`)),
    radbrref: notRequiredString(6),
    spremabrInt: notRequiredString(3),
    opsbrRada: notRequiredString(5),
    username: notRequiredString(30),
    nadzor: z.number().optional(),
    obrJedinica: notRequiredString(12),
    stevbr: notRequiredString(6),
    sortniPojam: notRequiredString(50),
    samohran: notRequiredString(1),
    titula: notRequiredString(10),
    lbo: lboSchema,
    mail: z.email(i18n.t(`${KADROVI_NS}:errors.obavezno`)).max(255, `${i18n.t(`${KADROVI_NS}:errors.ogranicenjePolja`)} 255 ${i18n.t(`${KADROVI_NS}:errors.karaktera`)}`).optional(),
    externalUsername: notRequiredString(255),
    jeStranac: notRequiredString(1),
    brojlk: notRequiredString(50),
});

export type Radnik = z.infer<typeof keRadnikSchema>;