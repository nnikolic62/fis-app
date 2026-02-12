import { DataTable } from "@repo/ui/data-table/DataTable";
import { FormProvider, useForm } from "react-hook-form";
import { ColumnDef } from "@tanstack/react-table";
import { FormCheckbox } from "@repo/ui/formComponents/formCheckbox";
import { FormInput } from "@repo/ui/formComponents/FormInput";
import { useState } from "react";
import { formatDisplayDate, FormDatePicker } from "@repo/ui/formComponents/formDatePicker";

type PriznatiStazData = {
  radbr: string;
  rbr: string;
  datumPriznavanja: Date;
  godine: number;
  meseci: number;
  dani: number;
  razlog: string;
  ulaziUVremenskiStaz: "0" | "1";
  ulaziUPenzionskiStaz: "0" | "1";
  ulaziUStazZaMinuli: "0" | "1";
};

const priznatiStazColumns: ColumnDef<PriznatiStazData>[] = [
  {
    header: "Datum priznavanja",
    accessorKey: "datumPriznavanja",
    cell: ({ getValue }) => (
      <span>{formatDisplayDate(getValue() as Date ?? "")}</span>
    )
  },
  {
    header: "Godine",
    accessorKey: "godine",
  },
  {
    header: "Meseci",
    accessorKey: "meseci",
  },
  {
    header: "Dani",
    accessorKey: "dani",
  },
  {
    header: "Razlog",
    accessorKey: "razlog",
  },
  {
    header: "Vremenski staž",
    accessorKey: "ulaziUVremenskiStaz",
    cell: ({ getValue }) => (
      <FormCheckbox 
        label=""
        checked={String(getValue()) === "1"}
        disabled
      />
    )
  },
  {
    header: "Penzioni staž",
    accessorKey: "ulaziUPenzionskiStaz",
    cell: ({ getValue }) => (
      <FormCheckbox 
        label=""
        checked={String(getValue()) === "1"}
        disabled
      />
    )
  },
  {
    header: "Staž za minuli",
    accessorKey: "ulaziUStazZaMinuli",
    cell: ({ getValue }) => (
      <FormCheckbox 
        label=""
        checked={String(getValue()) === "1"}
        disabled
      />
    )
  },
];

const priznatiStazDummy: PriznatiStazData[] = [
  {
    radbr: "000123",
    rbr: "01",
    datumPriznavanja: new Date("2018-05-10"),
    godine: 2,
    meseci: 3,
    dani: 15,
    razlog: "Vojni rok",
    ulaziUVremenskiStaz: "1",
    ulaziUPenzionskiStaz: "1",
    ulaziUStazZaMinuli: "0",
  },
  {
    radbr: "000123",
    rbr: "02",
    datumPriznavanja: new Date("2020-01-15"),
    godine: 1,
    meseci: 6,
    dani: 0,
    razlog: "Stručno usavršavanje",
    ulaziUVremenskiStaz: "1",
    ulaziUPenzionskiStaz: "0",
    ulaziUStazZaMinuli: "0",
  },
  {
    radbr: "000124",
    rbr: "01",
    datumPriznavanja: new Date("2017-09-20"),
    godine: 3,
    meseci: 0,
    dani: 0,
    razlog: "Porodiljsko odsustvo",
    ulaziUVremenskiStaz: "1",
    ulaziUPenzionskiStaz: "1",
    ulaziUStazZaMinuli: "1",
  },
  {
    radbr: "000124",
    rbr: "02",
    datumPriznavanja: new Date("2019-03-12"),
    godine: 0,
    meseci: 11,
    dani: 20,
    razlog: "Medicinski razlozi",
    ulaziUVremenskiStaz: "0",
    ulaziUPenzionskiStaz: "1",
    ulaziUStazZaMinuli: "0",
  },
  {
    radbr: "000125",
    rbr: "01",
    datumPriznavanja: new Date("2016-07-05"),
    godine: 1,
    meseci: 8,
    dani: 10,
    razlog: "Volonterski rad",
    ulaziUVremenskiStaz: "1",
    ulaziUPenzionskiStaz: "0",
    ulaziUStazZaMinuli: "0",
  },
  {
    radbr: "000125",
    rbr: "02",
    datumPriznavanja: new Date("2021-11-30"),
    godine: 2,
    meseci: 0,
    dani: 5,
    razlog: "Obrazovanje",
    ulaziUVremenskiStaz: "1",
    ulaziUPenzionskiStaz: "1",
    ulaziUStazZaMinuli: "0",
  },
];

type PriznatiStazProps = {
  data?: PriznatiStazData[];
};

export default function PriznatiStaz({ data }: PriznatiStazProps) {
  const methods = useForm<PriznatiStazData>({
    mode: "onBlur"
  });
  const [selectedRow, setSelectedRow] = useState<PriznatiStazData | undefined>(undefined);
  const rows = data ?? priznatiStazDummy;

  const getRowId = (row: PriznatiStazData) => `${row.radbr}-${row.rbr}`;

  return (
    <FormProvider {...methods}>
      <DataTable
        columns={priznatiStazColumns}
        data={rows}
        tableOptions={{
          enableRowSelection: true,
          enableMultiRowSelection: false,
          getRowId
        }}
      />
      <div className="flex gap-3 mb-2 mx-auto mt-4">
        <FormDatePicker
          label="Datum priznavanja"
          containerClassName="lg:col-span-1"
          value={selectedRow?.datumPriznavanja ? formatDisplayDate(selectedRow.datumPriznavanja) : ""}
          readOnly
        />
        <FormInput
          label="Razlog"
          containerClassName="lg:col-span-2"
          value={selectedRow?.razlog || ""}
          readOnly
        />
        <FormInput
          label="Trajanje"
          containerClassName="lg:col-span-1"
          value={selectedRow ? `${selectedRow.godine}g ${selectedRow.meseci}m ${selectedRow.dani}d` : ""}
          readOnly
        />
      </div>
    </FormProvider>
  );
}
