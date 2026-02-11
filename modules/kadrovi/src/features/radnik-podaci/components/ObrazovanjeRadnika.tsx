import { FormProvider, useForm } from "react-hook-form"
import { DataTable } from "@repo/ui/data-table/DataTable";
import { createColumnHelper } from "@tanstack/react-table";
import { KADROVI_NS } from "../../../config/i18n";
import { i18n } from "@repo/i18n-config";
import { formatDisplayDate } from "@repo/ui/formComponents/formDatePicker";
import { FormCheckbox } from "@repo/ui/formComponents/formCheckbox";
import { FormInput } from "@repo/ui/formComponents/formInput";

export type Obrazovanje = {
    vrstaSkole: number;
    nazivSkole: string;
    sprema: number;
    spremaNaziv: string;
    smer: string;
    smerNaziv: string;
    stepen: string;
    brojDiplome: number;
    datumUpisa: Date;
    datumDiplomiranja: Date;
    prosek: string;
    internaSprema: string;
    zanimanje: string;
    zanimanjetext: string;
}

const columnHelper = createColumnHelper<Obrazovanje>();

const obrazovanjeColumns = [
    columnHelper.accessor("vrstaSkole", {
        header: i18n.t(`${KADROVI_NS}:obrazovanje.vrsteSkola`),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("nazivSkole", {
        header: i18n.t(`${KADROVI_NS}:obrazovanje.nazivSkole`),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("sprema", {
        header: i18n.t(`${KADROVI_NS}:obrazovanje.sprema`),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("spremaNaziv", {
        header: "",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("smer", {
        header: i18n.t(`${KADROVI_NS}:obrazovanje.smer`),
        cell: (info) => info.getValue(),
    })
    ,columnHelper.accessor("smerNaziv", {
        header: "",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("stepen", {
        header: i18n.t(`${KADROVI_NS}:obrazovanje.stepen`),
        cell: (info) => info.getValue(),
    })
    ,columnHelper.accessor("brojDiplome", {
        header: i18n.t(`${KADROVI_NS}:obrazovanje.brojDiplome`),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("datumUpisa", {
        header: i18n.t(`${KADROVI_NS}:obrazovanje.datumUpisa`),
        cell: (info) => formatDisplayDate(info.getValue()),
    }),
    columnHelper.accessor("datumDiplomiranja", {
        header: i18n.t(`${KADROVI_NS}:obrazovanje.datumDiplomiranja`),
        cell: (info) => formatDisplayDate(info.getValue()),
    }),
    columnHelper.accessor("prosek", {
        header: i18n.t(`${KADROVI_NS}:obrazovanje.prosek`),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("internaSprema", {
        header: i18n.t(`${KADROVI_NS}:obrazovanje.internaSprema`),
        cell: (info) => <FormCheckbox 
          label=""
          checked={info.getValue().toString() === "1"}
        />,
    }),
    columnHelper.accessor("zanimanje", {
        header: i18n.t(`${KADROVI_NS}:obrazovanje.zanimanje`),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("zanimanjetext", {
        header: "",
        cell: (info) => info.getValue(),
    })
]

export const obrazovanjaMock: Obrazovanje[] = [
  {
    vrstaSkole: 1,
    nazivSkole: "Gimnazija 'Bora Stanković', Niš",
    sprema: 4,
    spremaNaziv: "Srednja škola",
    smer: "GIM",
    smerNaziv: "Opšti smer",
    stepen: "IV",
    brojDiplome: 120345,
    datumUpisa: new Date("2013-09-01"),
    datumDiplomiranja: new Date("2017-06-20"),
    prosek: "4.72",
    internaSprema: "0",
    zanimanje: "Učenik",
    zanimanjetext: "Učenik gimnazije",
  },
  {
    vrstaSkole: 2,
    nazivSkole: "ETŠ 'Nikola Tesla', Niš",
    sprema: 4,
    spremaNaziv: "Srednja škola",
    smer: "ELT",
    smerNaziv: "Elektrotehničar računara",
    stepen: "IV",
    brojDiplome: 110982,
    datumUpisa: new Date("2012-09-01"),
    datumDiplomiranja: new Date("2016-06-18"),
    prosek: "4.18",
    internaSprema: "0",
    zanimanje: "Elektrotehničar",
    zanimanjetext: "Elektrotehničar računara",
  },
  {
    vrstaSkole: 3,
    nazivSkole: "Fakultet elektronskih inženjera, Niš",
    sprema: 6,
    spremaNaziv: "Visoko obrazovanje",
    smer: "RAC",
    smerNaziv: "Računarstvo i informatika",
    stepen: "VI",
    brojDiplome: 56781,
    datumUpisa: new Date("2017-10-02"),
    datumDiplomiranja: new Date("2021-09-30"),
    prosek: "8.64",
    internaSprema: "0",
    zanimanje: "Softverski inženjer",
    zanimanjetext: "Diplomirani inženjer računarstva",
  },
  {
    vrstaSkole: 3,
    nazivSkole: "Fakultet elektronskih inženjera, Niš",
    sprema: 7,
    spremaNaziv: "Master studije",
    smer: "SOF",
    smerNaziv: "Softversko inženjerstvo",
    stepen: "VII-1",
    brojDiplome: 78012,
    datumUpisa: new Date("2021-10-15"),
    datumDiplomiranja: new Date("2023-10-01"),
    prosek: "9.12",
    internaSprema: "1",
    zanimanje: "Master inženjer",
    zanimanjetext: "Master inženjer softverskog inženjerstva",
  },
  {
    vrstaSkole: 4,
    nazivSkole: "Viša tehnička škola, Beograd",
    sprema: 5,
    spremaNaziv: "Viša škola",
    smer: "INF",
    smerNaziv: "Informacione tehnologije",
    stepen: "V",
    brojDiplome: 33490,
    datumUpisa: new Date("2014-10-01"),
    datumDiplomiranja: new Date("2017-07-10"),
    prosek: "8.03",
    internaSprema: "0",
    zanimanje: "IT tehničar",
    zanimanjetext: "Strukovni IT tehničar",
  },
  {
    vrstaSkole: 5,
    nazivSkole: "Visoka škola elektrotehnike i računarstva (VISER), Beograd",
    sprema: 6,
    spremaNaziv: "Osnovne strukovne studije",
    smer: "WEB",
    smerNaziv: "Web programiranje",
    stepen: "VI",
    brojDiplome: 90127,
    datumUpisa: new Date("2018-10-01"),
    datumDiplomiranja: new Date("2021-06-25"),
    prosek: "9.01",
    internaSprema: "1",
    zanimanje: "Web developer",
    zanimanjetext: "Strukovni inženjer web tehnologija",
  },
  {
    vrstaSkole: 6,
    nazivSkole: "Fakultet tehničkih nauka, Novi Sad",
    sprema: 6,
    spremaNaziv: "Osnovne akademske studije",
    smer: "AUT",
    smerNaziv: "Automatika i upravljanje sistemima",
    stepen: "VI",
    brojDiplome: 44567,
    datumUpisa: new Date("2016-10-01"),
    datumDiplomiranja: new Date("2020-09-15"),
    prosek: "8.11",
    internaSprema: "1",
    zanimanje: "Inženjer automatike",
    zanimanjetext: "Diplomirani inženjer automatike",
  },
  {
    vrstaSkole: 7,
    nazivSkole: "PMF, Departman za matematiku i informatiku, Kragujevac",
    sprema: 6,
    spremaNaziv: "Osnovne akademske studije",
    smer: "INF",
    smerNaziv: "Informatika",
    stepen: "VI",
    brojDiplome: 51234,
    datumUpisa: new Date("2015-10-01"),
    datumDiplomiranja: new Date("2019-07-05"),
    prosek: "8.77",
    internaSprema: "1",
    zanimanje: "Programer",
    zanimanjetext: "Diplomirani informatičar",
  },
  {
    vrstaSkole: 8,
    nazivSkole: "Ekonomski fakultet, Beograd",
    sprema: 6,
    spremaNaziv: "Osnovne akademske studije",
    smer: "MEN",
    smerNaziv: "Menadžment",
    stepen: "VI",
    brojDiplome: 67890,
    datumUpisa: new Date("2013-10-01"),
    datumDiplomiranja: new Date("2017-09-28"),
    prosek: "8.25",
    internaSprema: "1",
    zanimanje: "Menadžer",
    zanimanjetext: "Diplomirani ekonomista - menadžment",
  },
  {
    vrstaSkole: 9,
    nazivSkole: "FON, Univerzitet u Beogradu",
    sprema: 7,
    spremaNaziv: "Master akademske studije",
    smer: "IS",
    smerNaziv: "Informacioni sistemi i tehnologije",
    stepen: "VII-1",
    brojDiplome: 34567,
    datumUpisa: new Date("2020-10-12"),
    datumDiplomiranja: new Date("2022-10-05"),
    prosek: "9.35",
    internaSprema: "1",
    zanimanje: "IT konsultant",
    zanimanjetext: "Master informacionih sistema",
  },
];



export default function ObrazovanjeRadnika() {
    const methods = useForm<Obrazovanje>();
    return (
      <FormProvider {...methods}>
        <DataTable
          columns={obrazovanjeColumns}
          data={obrazovanjaMock}
          tableOptions={{
          enableRowSelection: false,
          enableMultiRowSelection: false,
        }}
        />
        <div>
          <div className="flex gap-2 items-end">
            <FormInput containerClassName="flex-[1]" 
              label={i18n.t(`${KADROVI_NS}:obrazovanje.skolaUstanova`)}
                />
            <FormInput
              containerClassName="flex-[4]"  
            />
            
            </div>

        </div>

      </FormProvider>
    )
}