import { DataTable } from "@repo/ui/data-table/DataTable";
import { createColumnHelper } from "@tanstack/react-table";
import { KADROVI_NS } from "../../../config/i18n";
import { i18n } from "@repo/i18n-config";
import { formatDisplayDate } from "@repo/ui/formComponents/formDatePicker";

export type Dodatno = {
    stepen: number;
    status: string;
    datumUpisa: Date;
    datumZavrsetka: Date;
    mesto: string;
    skola: string;
    ocena: string;
    brojDiplome: string;
    text: string;
}

const columnsHelper = createColumnHelper<Dodatno>();

export const dodatnoColumns = [
    columnsHelper.accessor("stepen",{
        header: i18n.t(`${KADROVI_NS}:vestine.stepen`),
        cell: (info) => info.getValue(),
    }),
    columnsHelper.accessor("status",{
        header: "",
        cell: (info) => info.getValue(),
    }),
     columnsHelper.accessor("datumUpisa",{
        header: i18n.t(`${KADROVI_NS}:vestine.datumUpisa`),
        cell: (info) => formatDisplayDate(info.getValue() as Date || ""),
    }),
     columnsHelper.accessor("datumZavrsetka",{
        header: i18n.t(`${KADROVI_NS}:vestine.datumZavrsetka`),
        cell: (info) => formatDisplayDate(info.getValue() as Date || ""),
    }),
     columnsHelper.accessor("mesto",{
        header: i18n.t(`${KADROVI_NS}:vestine.mestoLokacija`),
        cell: (info) => info.getValue(),
    }),
     columnsHelper.accessor("skola",{
        header: i18n.t(`${KADROVI_NS}:vestine.skola`),
        cell: (info) => info.getValue(),
    }),
]


export const dodatnoMock: Dodatno[] = [
  {
    stepen: 1,
    status: "Završeno",
    datumUpisa: new Date("2019-02-10"),
    datumZavrsetka: new Date("2019-06-20"),
    mesto: "Niš",
    skola: "IT Akademija",
    ocena: "10",
    brojDiplome: "DIP-2019-0001",
    text: "Kurs: Osnove programiranja (JavaScript).",
  },
  {
    stepen: 2,
    status: "Završeno",
    datumUpisa: new Date("2020-03-05"),
    datumZavrsetka: new Date("2020-07-15"),
    mesto: "Beograd",
    skola: "Visoka ICT škola",
    ocena: "9",
    brojDiplome: "DIP-2020-0142",
    text: "Program: Web development (HTML/CSS/JS).",
  },
  {
    stepen: 3,
    status: "U toku",
    datumUpisa: new Date("2025-10-01"),
    datumZavrsetka: new Date("2026-06-30"),
    mesto: "Novi Sad",
    skola: "FTN - Centar za obrazovanje",
    ocena: "",
    brojDiplome: "UT-2025-0330",
    text: "Obuka: Testiranje softvera (manual + osnove automatizacije).",
  },
  {
    stepen: 2,
    status: "Završeno",
    datumUpisa: new Date("2021-09-12"),
    datumZavrsetka: new Date("2021-12-18"),
    mesto: "Niš",
    skola: "Centar za strane jezike",
    ocena: "8",
    brojDiplome: "ENG-2021-0088",
    text: "Kurs engleskog jezika B2.",
  },
  {
    stepen: 4,
    status: "Završeno",
    datumUpisa: new Date("2022-04-01"),
    datumZavrsetka: new Date("2022-04-30"),
    mesto: "Online",
    skola: "Udemy",
    ocena: "Pass",
    brojDiplome: "UD-2022-5512",
    text: "Kurs: React + TypeScript (napredni koncepti).",
  },
  {
    stepen: 3,
    status: "Prekinuto",
    datumUpisa: new Date("2023-02-14"),
    datumZavrsetka: new Date("2023-03-20"),
    mesto: "Beograd",
    skola: "Privatna škola računara",
    ocena: "N/A",
    brojDiplome: "PR-2023-0103",
    text: "Kurs: Linux administracija (prekinuto zbog obaveza).",
  },
  {
    stepen: 5,
    status: "Završeno",
    datumUpisa: new Date("2024-05-10"),
    datumZavrsetka: new Date("2024-06-10"),
    mesto: "Online",
    skola: "Coursera",
    ocena: "Completed",
    brojDiplome: "CO-2024-7770",
    text: "Specijalizacija: SQL za analitiku (osnove + napredni upiti).",
  },
  {
    stepen: 2,
    status: "Završeno",
    datumUpisa: new Date("2018-10-01"),
    datumZavrsetka: new Date("2019-01-15"),
    mesto: "Niš",
    skola: "Škola stranih jezika 'Lingua'",
    ocena: "9",
    brojDiplome: "DE-2019-0044",
    text: "Kurs nemačkog jezika A2.",
  },
  {
    stepen: 4,
    status: "U toku",
    datumUpisa: new Date("2025-11-15"),
    datumZavrsetka: new Date("2026-03-15"),
    mesto: "Online",
    skola: "Pluralsight",
    ocena: "",
    brojDiplome: "PS-2025-1209",
    text: "Obuka: Docker i kontejnerizacija (praktikum).",
  },
  {
    stepen: 1,
    status: "Završeno",
    datumUpisa: new Date("2017-03-01"),
    datumZavrsetka: new Date("2017-03-25"),
    mesto: "Niš",
    skola: "Narodni univerzitet",
    ocena: "10",
    brojDiplome: "NU-2017-0099",
    text: "Seminar: Poslovna komunikacija i rad u timu.",
  },
];




export default function VestineDodatno () {
    return(
      <DataTable 
        columns={dodatnoColumns}
        data={dodatnoMock}
      />       
    )
}