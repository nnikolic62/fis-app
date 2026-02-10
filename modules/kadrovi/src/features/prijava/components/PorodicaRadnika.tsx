import { DataTable } from "@repo/ui/data-table/DataTable";
import { KePorod } from "../../shared/schemas/kePorod";
import { FormProvider, useForm } from "react-hook-form";
import { ColumnDef } from "@tanstack/react-table";
import { i18n, useTranslation } from "@repo/i18n-config";
import { KADROVI_NS } from "../../../config/i18n";
import { FormInput } from "@repo/ui/formComponents/formInput";
import { FormCheckbox } from "@repo/ui/formComponents/formCheckbox";
import { FormSelect } from "@repo/ui/formComponents/formSelect";
import { useState } from "react";
import { formatDisplayDate, FormDatePicker } from "@repo/ui/formComponents/formDatePicker";


const porodicaRanikaColumns: ColumnDef<KePorod>[] = [

  {
    header: i18n.t(`${KADROVI_NS}:pregled-radnika.prezime`),
    accessorKey: "prezimeR",
  },
  {
    header: i18n.t(`${KADROVI_NS}:pregled-radnika.srednjeSlovo`),
    accessorKey: "srSlovoR",
  },
  {
    header: i18n.t(`${KADROVI_NS}:pregled-radnika.ime`),
    accessorKey: "imeR",
  },
  {
    header: i18n.t(`${KADROVI_NS}:pregled-radnika.srodstvo`),
    accessorKey: "srodstvo",
  },
  {
    header: i18n.t(`${KADROVI_NS}:pregled-radnika.datumRodjenja`),
    accessorKey: "datumRodjR",
    cell: ({ getValue }) => (
      <span>{formatDisplayDate(getValue() as Date ?? "")}</span>
    )
  },
  {
    header: i18n.t(`${KADROVI_NS}:pregled-radnika.licniBroj`),
    accessorKey: "licniBrR",
  },
  {
    header: i18n.t(`${KADROVI_NS}:pregled-radnika.lbo`),
    accessorKey: "lboR",
  },
  {
    header: i18n.t(`${KADROVI_NS}:pregled-radnika.devojackoPrezime`),
    accessorKey: "devPrezR",
  },
  {
    header: i18n.t(`${KADROVI_NS}:pregled-radnika.invalidnost`),
    accessorKey: "ostecen",
    cell: ({ getValue }) => (
      <FormCheckbox 
        label=""
        checked={String(getValue()) === "1"}
      />
    )
  },
]

const porodicaRadnikaDummy: KePorod[] = [
  {
    radbr: "000123",
    rbr: "01",
    prezimeR: "Petrović",
    srSlovoR: "M",
    imeR: "Milica",
    srodstvo: "01",
    datumRodjR: new Date("1992-04-12"),
    licniBrR: "1204992712345".slice(0, 13),
    lboR: "12345678901" as any,
    devPrezR: "Jovanović",
    ostecen: "0",
    slika: "SLK0000001",
    status: "AKT",
    datumPrijaveRzzo: new Date("2020-02-10"),
  },
  {
    radbr: "000123",
    rbr: "02",
    prezimeR: "Petrović",
    srSlovoR: "A",
    imeR: "Marko",
    srodstvo: "02",
    datumRodjR: new Date("1989-11-03"),
    licniBrR: "0311989712345".slice(0, 13),
    lboR: "22345678901" as any,
    devPrezR: undefined,
    ostecen: "0",
    slika: "SLK0000002",
    status: "AKT",
    datumPrijaveRzzo: new Date("2019-06-18"),
  },
  {
    radbr: "000123",
    rbr: "03",
    prezimeR: "Petrović",
    srSlovoR: "J",
    imeR: "Stefan",
    srodstvo: "03",
    datumRodjR: new Date("2016-09-22"),
    licniBrR: undefined,
    lboR: "32345678901" as any,
    devPrezR: undefined,
    ostecen: "0",
    slika: "SLK0000003",
    status: "AKT",
    datumPrijaveRzzo: new Date("2016-10-01"),
  },
  {
    radbr: "000123",
    rbr: "04",
    prezimeR: "Petrović",
    srSlovoR: "E",
    imeR: "Teodora",
    srodstvo: "03",
    datumRodjR: new Date("2019-01-15"),
    licniBrR: undefined,
    lboR: "42345678901" as any,
    devPrezR: undefined,
    ostecen: "0",
    slika: "SLK0000004",
    status: "AKT",
    datumPrijaveRzzo: new Date("2019-02-05"),
  },
  {
    radbr: "000124",
    rbr: "01",
    prezimeR: "Nikolić",
    srSlovoR: "S",
    imeR: "Jelena",
    srodstvo: "01",
    datumRodjR: new Date("1995-07-08"),
    licniBrR: "0807995712345".slice(0, 13),
    lboR: "52345678901" as any,
    devPrezR: "Stojanović",
    ostecen: "1",
    slika: "SLK0000005",
    status: "AKT",
    datumPrijaveRzzo: new Date("2021-03-12"),
  },
  {
    radbr: "000124",
    rbr: "02",
    prezimeR: "Nikolić",
    srSlovoR: "D",
    imeR: "Dušan",
    srodstvo: "02",
    datumRodjR: new Date("1990-02-27"),
    licniBrR: "2702990712345".slice(0, 13),
    lboR: "62345678901" as any,
    devPrezR: undefined,
    ostecen: "0",
    slika: "SLK0000006",
    status: "AKT",
    datumPrijaveRzzo: new Date("2020-09-01"),
  },
  {
    radbr: "000124",
    rbr: "03",
    prezimeR: "Nikolić",
    srSlovoR: "L",
    imeR: "Lana",
    srodstvo: "03",
    datumRodjR: new Date("2021-05-19"),
    licniBrR: undefined,
    lboR: "72345678901" as any,
    devPrezR: undefined,
    ostecen: "0",
    slika: "SLK0000007",
    status: "AKT",
    datumPrijaveRzzo: new Date("2021-06-01"),
  },
  {
    radbr: "000125",
    rbr: "01",
    prezimeR: "Ilić",
    srSlovoR: "N",
    imeR: "Ana",
    srodstvo: "01",
    datumRodjR: new Date("1993-12-30"),
    licniBrR: "3012993712345".slice(0, 13),
    lboR: "82345678901" as any,
    devPrezR: "Milošević",
    ostecen: "0",
    slika: "SLK0000008",
    status: "AKT",
    datumPrijaveRzzo: new Date("2018-01-20"),
  },
  {
    radbr: "000125",
    rbr: "02",
    prezimeR: "Ilić",
    srSlovoR: "P",
    imeR: "Nemanja",
    srodstvo: "02",
    datumRodjR: new Date("1991-08-14"),
    licniBrR: "1408991712345".slice(0, 13),
    lboR: "92345678901" as any,
    devPrezR: undefined,
    ostecen: "0",
    slika: "SLK0000009",
    status: "AKT",
    datumPrijaveRzzo: new Date("2017-09-05"),
  },
  {
    radbr: "000125",
    rbr: "03",
    prezimeR: "Ilić",
    srSlovoR: "V",
    imeR: "Vuk",
    srodstvo: "03",
    datumRodjR: new Date("2014-03-02"),
    licniBrR: undefined,
    lboR: "10345678901" as any,
    devPrezR: undefined,
    ostecen: "0",
    slika: "SLK0000010",
    status: "AKT",
    datumPrijaveRzzo: new Date("2014-03-20"),
  },
];


type PorodicaProps = {
  data?: KePorod[];
};

export default function PorodicaRadnika({data}: PorodicaProps) {
  const {t} = useTranslation(KADROVI_NS);
  const methods = useForm<KePorod>({
    mode: "onBlur"
  })
  const [selectedRow, setSelectedRow] = useState<KePorod | undefined>(undefined);
  const rows = data ?? porodicaRadnikaDummy;

  const getRowId = (row: KePorod) => `${row.radbr}-${row.rbr}`;

    return (
        <FormProvider {...methods}>
          <DataTable
            columns={porodicaRanikaColumns}
            data={rows}
            tableOptions={{
              enableRowSelection: true,
              enableMultiRowSelection: false,
              getRowId
            }}
            onSelectedRowsChange={(selectedRows) => setSelectedRow(selectedRows[0])}
          />
          <div className="flex gap-3 mb-2 mx-auto">
            <FormDatePicker
              label={t("pregled-radnika.datumPrijaveNaRzzo")}
              containerClassName="lg:col-span-1"
              value={selectedRow?.datumPrijaveRzzo ? formatDisplayDate(selectedRow.datumPrijaveRzzo) : ""}
            />
           <FormSelect
            label={t("pregled-radnika.status")}
            containerClassName="lg:col-span-1"
            options={[]}
            {...methods.register("status")}
          />
          </div>
        </FormProvider>
    )
}
