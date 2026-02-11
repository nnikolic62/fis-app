import { FormProvider, useForm } from "react-hook-form"
import { PageWithHeader } from "@repo/ui/pageHeader/pageWithHeader";
import { Button } from "@repo/ui/button";
import { useMemo, useState } from "react";
import { FormInput } from "@repo/ui/formComponents/FormInput";
import { FormSelect } from "@repo/ui/formComponents/formSelect";
import { formatDisplayDate, FormDatePicker } from "@repo/ui/formComponents/formDatePicker";
import { DataTable } from "@repo/ui/data-table/DataTable";
import { ColumnDef, RowSelectionState } from "@tanstack/react-table";
import FilterFormLayout from "../../layouts/filter-form-layout";
import { Tabs, TabsContent } from "@repo/ui/tabs";
import { TabsList } from "@repo/ui/tabs";
import { TabsTrigger } from "@repo/ui/tabs";
import PorodicaRadnika from "./components/PorodicaRadnika";
import ObrazovanjeRadnika from "./components/ObrazovanjeRadnika";
import Vestine from "./components/Vestine";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";
import { UsersIcon } from "@phosphor-icons/react/dist/ssr/Users";
import { GraduationCapIcon } from "@phosphor-icons/react/dist/ssr/GraduationCap";
import { StarIcon } from "@phosphor-icons/react/dist/ssr/Star";

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
    cell: ({ getValue }) => formatDisplayDate(getValue() as Date || "")
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
            containerClassName="lg:col-span-2"
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
          <div className="lg:col-span-1 flex items-end">
            <Button variant="primary" icon={<MagnifyingGlassIcon size={16} />}>
              Pretraga
            </Button>
          </div>
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
              <UsersIcon />
              Porodica
            </TabsTrigger>
            <TabsTrigger className="flex items-center gap-2" value="obrazovanje">
              <GraduationCapIcon />
              Obrazovanje
            </TabsTrigger>
            <TabsTrigger className="flex items-center gap-2" value="vestine">
              <StarIcon />
              Vestine
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex-1 overflow-hidden px-6 pb-6">
          <Tabs
            className="h-full flex flex-col"
            value={activeEntity}
            onValueChange={(value) => setActiveEntity(value as Activity)}
          >
            <TabsContent className="flex-1 mt-0 overflow-hidden" value="porodica">
              <PorodicaRadnika />
            </TabsContent>
            <TabsContent className="flex-1 mt-0 overflow-hidden" value="obrazovSanje">
              <ObrazovanjeRadnika />
            </TabsContent>
            <TabsContent className="flex-1 mt-0 overflow-hidden" value="vestine">
              <Vestine />
            </TabsContent>
          </Tabs>
        </div>
      </PageWithHeader>
    </FormProvider>
  );
}