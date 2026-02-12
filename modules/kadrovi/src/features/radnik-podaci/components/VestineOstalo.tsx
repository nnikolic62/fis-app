import { i18n } from "@repo/i18n-config";
import { createColumnHelper } from "@tanstack/react-table";
import { KADROVI_NS } from "../../../config/i18n";
import { formatDisplayDate } from "@repo/ui/formComponents/formDatePicker";
import { DataTable } from "@repo/ui/data-table/DataTable";

export type Ostalo ={
    organizator: string;
    trajanje: string;
    cena: string;
    planiraniDatum: Date;
    datumVaznosti: Date;
}

const columnHelper = createColumnHelper<Ostalo>();

export const ostaloColumns = [
    columnHelper.accessor("organizator", {
        header: i18n.t(`${KADROVI_NS}:vestine.organizator`),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("trajanje", {
        header: i18n.t(`${KADROVI_NS}:vestine.trajanje`),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("cena", {
        header: i18n.t(`${KADROVI_NS}:vestine.cena`),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("planiraniDatum", {
        header: i18n.t(`${KADROVI_NS}:vestine.planiraniDatum`),
        cell: (info) => formatDisplayDate(info.getValue() as Date || ""),
    }),
    columnHelper.accessor("datumVaznosti", {
        header: i18n.t(`${KADROVI_NS}:vestine.datumVaznosti`),
        cell: (info) => formatDisplayDate(info.getValue() as Date || ""),
    }),
]

export const ostaloMock: Ostalo[] = [
  {
    organizator: "IT Akademija",
    trajanje: "6 nedelja",
    cena: "35.000 RSD",
    planiraniDatum: new Date("2026-03-10"),
    datumVaznosti: new Date("2027-03-10"),
  },
  {
    organizator: "Coursera",
    trajanje: "4 nedelje",
    cena: "49 EUR",
    planiraniDatum: new Date("2026-02-20"),
    datumVaznosti: new Date("2028-02-20"),
  },
  {
    organizator: "Udemy",
    trajanje: "20 sati",
    cena: "19.99 EUR",
    planiraniDatum: new Date("2026-04-05"),
    datumVaznosti: new Date("2030-01-01"),
  },
  {
    organizator: "Fakultet elektronskih inženjera - Centar za obuke",
    trajanje: "3 meseca",
    cena: "45.000 RSD",
    planiraniDatum: new Date("2026-05-01"),
    datumVaznosti: new Date("2029-05-01"),
  },
  {
    organizator: "Centar za strane jezike 'Lingua'",
    trajanje: "2 meseca",
    cena: "18.000 RSD",
    planiraniDatum: new Date("2026-03-01"),
    datumVaznosti: new Date("2027-03-01"),
  },
  {
    organizator: "Pluralsight",
    trajanje: "30 sati",
    cena: "29 USD",
    planiraniDatum: new Date("2026-02-15"),
    datumVaznosti: new Date("2028-12-31"),
  },
  {
    organizator: "Microsoft Learn",
    trajanje: "5 dana",
    cena: "Besplatno",
    planiraniDatum: new Date("2026-06-08"),
    datumVaznosti: new Date("2029-06-08"),
  },
  {
    organizator: "AWS Training",
    trajanje: "2 dana",
    cena: "299 USD",
    planiraniDatum: new Date("2026-04-18"),
    datumVaznosti: new Date("2028-04-18"),
  },
  {
    organizator: "Serbian Java User Group",
    trajanje: "1 dan",
    cena: "0 RSD",
    planiraniDatum: new Date("2026-03-22"),
    datumVaznosti: new Date("2026-12-31"),
  },
  {
    organizator: "QA Academy",
    trajanje: "8 nedelja",
    cena: "28.000 RSD",
    planiraniDatum: new Date("2026-09-15"),
    datumVaznosti: new Date("2027-09-15"),
  },
];

export default function VestineOstalo () {

    return (
      <DataTable 
        columns={ostaloColumns}
        data={ostaloMock}
      />
    )
}