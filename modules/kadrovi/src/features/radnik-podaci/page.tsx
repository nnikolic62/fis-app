import { FormProvider, useForm } from "react-hook-form"
import { Radnik, RadnikSchema } from "../shared/schemas/radnik";
import { zodResolver } from "@hookform/resolvers/zod";
import { PageWithHeader } from "@repo/ui/pageHeader/pageWithHeader";
import { Button } from "@repo/ui/button";
import { XIcon } from "@phosphor-icons/react/dist/ssr/X";
import { useMemo } from "react";
import { FormInput } from "@repo/ui/formComponents/FormInput";
import { FormSelect } from "@repo/ui/formComponents/formSelect";
import { FormDatePicker } from "@repo/ui/formComponents/formDatePicker";
import { Card } from "@repo/ui/card";
import { DataTable } from "@repo/ui/data-table/DataTable";
import { MedalIcon } from "@phosphor-icons/react/dist/ssr/Medal";
import { ColumnDef } from "@tanstack/react-table";

type RadnikFilter = {
  radBr: string;
  prezime: string;
  srSlovo: string;
  ime: string;
  status: { key: string, value: string }[];
  orgjed: number;
  datumDolaska: Date | undefined;
}

const dummyData: RadnikFilter[] = [
  {
    radBr: "1234567890",
    prezime: "Petrovic",
    srSlovo: "P",
    ime: "Marko",
    status: [{ key: "1", value: "Aktivan" }],
    orgjed: 1,
    datumDolaska: new Date(),
  },
  {
    radBr: "1234567891",
    prezime: "Petrovic",
    srSlovo: "P",
    ime: "Marko",
    status: [{ key: "1", value: "Aktivan" }],
    orgjed: 1,
    datumDolaska: new Date(),
  },
  {
    radBr: "1234567892",
    prezime: "Petrovic",
    srSlovo: "P",
    ime: "Marko",
    status: [{ key: "1", value: "Aktivan" }],
    orgjed: 1,
    datumDolaska: new Date(),
  },
  {
    radBr: "1234567893",
    prezime: "Petrovic",
    srSlovo: "P",
    ime: "Marko",
    status: [{ key: "1", value: "Aktivan" }],
    orgjed: 1,
    datumDolaska: new Date(),
  },
  {
    radBr: "1234567894",
    prezime: "Petrovic",
    srSlovo: "P",
    ime: "Marko",
    status: [{ key: "1", value: "Aktivan" }],
    orgjed: 1,
    datumDolaska: new Date(),
  },
]
const dummyColumns: ColumnDef<RadnikFilter>[] = [

  {
    header: "Radni broj",
    accessorKey: "radBr",
  },
  {
    header: "Prezime",
    accessorKey: "prezime",
  },
  {
    header: "Sr. slovo",
    accessorKey: "srSlovo",
  },
  {
    header: "Ime",
    accessorKey: "ime",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Org jedinica",
    accessorKey: "orgjed",
  },
  {
    header: "Datum dolaska",
    accessorKey: "datumDolaska",
  },
]
export default function RadnikPodaciPage() {
  const defaultValues: RadnikFilter = useMemo(() => ({
    radBr: "",
    prezime: "",
    srSlovo: "",
    ime: "",
    status: [],
    orgjed: 0,
    datumDolaska: undefined,
  }), []);
  const methods = useForm<RadnikFilter>({
    mode: "onBlur",
    defaultValues,
    resolver: zodResolver(RadnikSchema),
  });
  return (
    <FormProvider {...methods}>
      <PageWithHeader
        title="Radnik Podaci"
        subtitle="Podaci o radniku"
        actions={
          <>
            <Button variant="secondary" icon={<XIcon size={16} />}>
              Odustani
            </Button>
          </>
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6 p-4 bg-white rounded-2xl shadow-sm border border-slate-200">
          <FormInput
            label="Radni broj"
            containerClassName="lg:col-span-1"
            {...methods.register("radBr")}
          />
          <FormInput
            label="Prezime"
            containerClassName="lg:col-span-2"
            {...methods.register("prezime")}
          />
          <FormInput
            label="Sr. slovo"
            containerClassName="lg:col-span-1"
            {...methods.register("srSlovo")}
          />
          <FormInput
            label="Ime"
            containerClassName="lg:col-span-2"
            {...methods.register("ime")}
          />
          <FormSelect
            label="Status"
            options={[]}
            containerClassName="lg:col-span-3"
            {...methods.register("status")}
          />
          <FormInput
            label="Org jedinica"
            containerClassName="lg:col-span-1"
            {...methods.register("orgjed")}
          />
          <FormDatePicker
            label="Datum dolaska"
            containerClassName="lg:col-span-2"
            {...methods.register("datumDolaska")}
          />
        </div>
          <DataTable
            data={dummyData}
            columns={dummyColumns}
            enablePagination
            manualPagination
            rowCount={dummyData.length}
            emptyMessage="Nema rezultata"
            tableOptions={{
              enableRowSelection: true,
              enableMultiRowSelection: false,
            }}
          />
      </PageWithHeader>
    </FormProvider>
  );
}