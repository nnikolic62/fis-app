import { FormProvider, useForm } from "react-hook-form"
import { PageWithHeader } from "@repo/ui/pageHeader/pageWithHeader";
import { Button } from "@repo/ui/button";
import { useMemo, useState } from "react";
import { FormInput } from "@repo/ui/formComponents/FormInput";
import { FormSelect } from "@repo/ui/formComponents/formSelect";
import { formatDisplayDate, FormDatePicker } from "@repo/ui/formComponents/formDatePicker";
import { DataTable } from "@repo/ui/data-table/DataTable";
import { ColumnDef, createColumnHelper, RowSelectionState } from "@tanstack/react-table";
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
import { IdentificationCardIcon } from "@phosphor-icons/react/dist/ssr/IdentificationCard";
import { EyeIcon } from "@phosphor-icons/react/dist/ssr/Eye";
import { IconButton } from "@repo/ui/IconButton";

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
const columnHelper = createColumnHelper<RadnikFilter>();

const selectColumn = columnHelper.display({
    id: "select",
    cell: ({ row }) => (
        <div className="flex items-center justify-center gap-2 pl-0">
        <input
            type="checkbox"
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            ref={(input) => {
                if (input) {
                    input.indeterminate = row.getIsSomeSelected();
                }
            }}
            className="
                        relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-slate-300 bg-white
                        transition-all duration-200

                        focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2
                        
                        checked:border-brand-600
                        
                        before:content-[''] before:absolute before:inset-1 before:rounded-full before:bg-brand-600
                        before:scale-0 before:transition-transform before:duration-200
                        checked:before:scale-100
"
            onChange={row.getToggleSelectedHandler()}
        />
        <IconButton className="cursor-pointer">
          <EyeIcon size={18} className="text-slate-400" />
        </IconButton>
        </div>
    ),
    enableSorting: false,
    enableHiding: false,
});
const dummyColumns: ColumnDef<RadnikFilter>[] = [
  selectColumn,
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
  const hasSelectedRows = useMemo(() => Object.keys(rowSelection).length > 0, [rowSelection]);

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
        <div className="lg:col-span-1 flex items-end">
            <Button variant="primary" icon={<MagnifyingGlassIcon size={16} />}>
              Pretraga
            </Button>
          </div>
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
            <TabsContent className="flex-1 mt-0 overflow-hidden" value="obrazovanje">
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