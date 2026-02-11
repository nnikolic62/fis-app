import { FormProvider, useForm } from "react-hook-form"
import { keRadnikSchema } from "../shared/schemas/keRadnik";
import { zodResolver } from "@hookform/resolvers/zod";
import { PageWithHeader } from "@repo/ui/pageHeader/pageWithHeader";
import { Button } from "@repo/ui/button";
import { XIcon } from "@phosphor-icons/react/dist/ssr/X";
import { useMemo, useState } from "react";
import { FormInput } from "@repo/ui/formComponents/FormInput";
import { FormSelect } from "@repo/ui/formComponents/formSelect";
import { FormDatePicker } from "@repo/ui/formComponents/formDatePicker";
import { DataTable } from "@repo/ui/data-table/DataTable";
import { ColumnDef, RowSelectionState } from "@tanstack/react-table";
import FilterFormLayout from "../../layouts/filter-form-layout";
import { Tabs } from "@repo/ui/tabs";
import { TabsList } from "@repo/ui/tabs";
import { TabsTrigger } from "@repo/ui/tabs";
import { BuildingsIcon } from "@phosphor-icons/react/dist/ssr/Buildings";
import { CubeIcon } from "@phosphor-icons/react/dist/ssr/Cube";
import { UserIcon } from "@phosphor-icons/react/dist/ssr/User";
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
    datumDolaska: new Date("2025-01-15"),
  },
  {
    radBr: "1234567891",
    prezime: "Petrovic",
    srSlovo: "P",
    ime: "Marko",
    status: [{ key: "1", value: "Aktivan" }],
    orgjed: 1,
    datumDolaska: new Date("2025-02-20"),
  },
  {
    radBr: "1234567892",
    prezime: "Petrovic",
    srSlovo: "P",
    ime: "Marko",
    status: [{ key: "1", value: "Aktivan" }],
    orgjed: 1,
    datumDolaska: new Date("2025-03-10"),
  },
  {
    radBr: "1234567893",
    prezime: "Petrovic",
    srSlovo: "P",
    ime: "Marko",
    status: [{ key: "1", value: "Aktivan" }],
    orgjed: 1,
    datumDolaska: new Date("2025-04-05"),
  },
  {
    radBr: "1234567894",
    prezime: "Petrovic",
    srSlovo: "P",
    ime: "Marko",
    status: [{ key: "1", value: "Aktivan" }],
    orgjed: 1,
    datumDolaska: new Date("2025-05-18"),
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

type Activity = 'porodica' | 'obrazovanje' | 'vestine';
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
  const [activeEntity, setActiveEntity] = useState<Activity>('porodica');
  const methods = useForm<RadnikFilter>({
    mode: "onBlur",
    // defaultValues,
    // resolver: zodResolver(keRadnikSchema),
  });
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  // Derive selected data rows from the selection state
  const selectedRows = useMemo(() => {
    return Object.keys(rowSelection)
      .filter((key) => rowSelection[key])
      .map((key) => dummyData[parseInt(key)]);
  }, [rowSelection]);

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
        <FilterFormLayout>
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
        </FilterFormLayout>
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
            state: { rowSelection },
            onRowSelectionChange: setRowSelection,
          }}
        />
        <Tabs value={activeEntity} onValueChange={(value) => setActiveEntity(value as Activity)}>
            <TabsList>
              <TabsTrigger className="flex items-center gap-2" value="porodica">
                <BuildingsIcon  />
                Porodica
              </TabsTrigger>
              <TabsTrigger className="flex items-center gap-2" value="obrazovanje">
                <CubeIcon />
                Obrazovanje
              </TabsTrigger>
              <TabsTrigger className="flex items-center gap-2" value="vestine">
                <UserIcon />
                Vestine
              </TabsTrigger>
            </TabsList>
          </Tabs>
      </PageWithHeader>
    </FormProvider>
  );
}