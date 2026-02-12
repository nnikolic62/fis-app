import { DataTable } from "@repo/ui/data-table/DataTable";
import { FormProvider, useForm } from "react-hook-form";
import { ColumnDef } from "@tanstack/react-table";
import { FormCheckbox } from "@repo/ui/formComponents/formCheckbox";
import { FormInput } from "@repo/ui/formComponents/FormInput";
import { useState } from "react";
import { formatDisplayDate, FormDatePicker } from "@repo/ui/formComponents/formDatePicker";
import { calculateWorkDuration } from "../../../utils/calculateWorkDuration";

type PrethodniStazData = {
  radbr: string;
  rbr: string;
  sifra: string;
  preduzece: string;
  nazivPreduzeca: string;
  sediste: string;
  holding: "0" | "1";
  firma: "0" | "1";
  radioOd: Date;
  radioDo: Date | undefined;
  beneficija: string;
};

const prethodniStazColumns: ColumnDef<PrethodniStazData>[] = [
  {
    header: "Šifra",
    accessorKey: "sifra",
  },
  {
    header: "Naziv preduzeća",
    accessorKey: "nazivPreduzeca",
  },
  {
    header: "Sedište",
    accessorKey: "sediste",
  },
  {
    header: "Holding",
    accessorKey: "holding",
    cell: ({ getValue }) => (
      <FormCheckbox 
        label=""
        checked={String(getValue()) === "1"}
        disabled
      />
    )
  },
  {
    header: "Firma",
    accessorKey: "firma",
    cell: ({ getValue }) => (
      <FormCheckbox 
        label=""
        checked={String(getValue()) === "1"}
        disabled
      />
    )
  },
  {
    header: "Radio od",
    accessorKey: "radioOd",
    cell: ({ getValue }) => (
      <span>{formatDisplayDate(getValue() as Date ?? "")}</span>
    )
  },
  {
    header: "Radio do",
    accessorKey: "radioDo",
    cell: ({ getValue }) => {
      const value = getValue() as Date | undefined;
      return <span>{value ? formatDisplayDate(value) : "-"}</span>;
    }
  },
  {
    header: "Beneficija",
    accessorKey: "beneficija",
  },
  {
    header: "Ukupno",
    accessorKey: "radioOd",
    cell: ({ row }) => (
      <span className="font-medium">
        {calculateWorkDuration(row.original.radioOd, row.original.radioDo)}
      </span>
    )
  },
];

const prethodniStazDummy: PrethodniStazData[] = [
  {
    radbr: "000123",
    rbr: "01",
    sifra: "PRD001",
    preduzece: "0001",
    nazivPreduzeca: "Tehnološka Kompanija d.o.o.",
    sediste: "Beograd",
    holding: "1",
    firma: "0",
    radioOd: new Date("2015-03-15"),
    radioDo: new Date("2018-06-30"),
    beneficija: "12",
  },
  {
    radbr: "000123",
    rbr: "02",
    sifra: "PRD002",
    preduzece: "0002",
    nazivPreduzeca: "IT Solutions a.d.",
    sediste: "Novi Sad",
    holding: "0",
    firma: "1",
    radioOd: new Date("2018-07-01"),
    radioDo: new Date("2021-12-31"),
    beneficija: "0",
  },
  {
    radbr: "000124",
    rbr: "01",
    sifra: "PRD003",
    preduzece: "0003",
    nazivPreduzeca: "Građevinska Grupa d.o.o.",
    sediste: "Niš",
    holding: "1",
    firma: "1",
    radioOd: new Date("2012-01-10"),
    radioDo: new Date("2019-08-15"),
    beneficija: "12",
  },
  {
    radbr: "000124",
    rbr: "02",
    sifra: "PRD004",
    preduzece: "0004",
    nazivPreduzeca: "Export Import d.o.o.",
    sediste: "Kragujevac",
    holding: "0",
    firma: "0",
    radioOd: new Date("2019-09-01"),
    radioDo: undefined, // Trenutno radi
    beneficija: "0",
  },
  {
    radbr: "000125",
    rbr: "01",
    sifra: "PRD005",
    preduzece: "0005",
    nazivPreduzeca: "Proizvodnja Plus d.o.o.",
    sediste: "Subotica",
    holding: "0",
    firma: "1",
    radioOd: new Date("2010-05-20"),
    radioDo: new Date("2016-11-30"),
    beneficija: "12",
  },
];

type PrethodniStazProps = {
  data?: PrethodniStazData[];
};

export default function PrethodniStaz({ data }: PrethodniStazProps) {
  const methods = useForm<PrethodniStazData>({
    mode: "onBlur"
  });
  const [selectedRow, setSelectedRow] = useState<PrethodniStazData | undefined>(undefined);
  const rows = data ?? prethodniStazDummy;

  const getRowId = (row: PrethodniStazData) => `${row.radbr}-${row.rbr}`;

  return (
    <FormProvider {...methods}>
      <DataTable
        columns={prethodniStazColumns}
        data={rows}
        tableOptions={{
          enableRowSelection: true,
          enableMultiRowSelection: false,
          getRowId
        }}
      />
      <div className="flex gap-3 mb-2 mx-auto mt-4">
        <FormInput
          label="Beneficija"
          containerClassName="lg:col-span-1"
          value={selectedRow?.beneficija || ""}
          readOnly
        />
        <FormDatePicker
          label="Radio od"
          containerClassName="lg:col-span-1"
          value={selectedRow?.radioOd ? formatDisplayDate(selectedRow.radioOd) : ""}
          readOnly
        />
        <FormDatePicker
          label="Radio do"
          containerClassName="lg:col-span-1"
          value={selectedRow?.radioDo ? formatDisplayDate(selectedRow.radioDo) : ""}
          readOnly
        />
      </div>
    </FormProvider>
  );
}
