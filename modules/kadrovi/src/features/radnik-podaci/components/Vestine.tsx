import { DataTable } from "@repo/ui/data-table/DataTable";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Vestina } from "../../shared/schemas/keGrupaVestina";
import { KADROVI_NS } from "../../../config/i18n";
import { i18n } from "@repo/i18n-config";
import ObrazovanjeRadnika from "./ObrazovanjeRadnika";
import VestineDodatno from "./VestineDodatno";
import VestineOstalo from "./VestineOstalo";

const columnHelper = createColumnHelper<Vestina>();

export const vestineColumns = [
    columnHelper.accessor("grupaVestina", {
        header: i18n.t(`${KADROVI_NS}:vestine.vestinaStraniJezik`),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("vestina", {
        header: "",
        cell: (info) => info.getValue(),
    })
]

export const keGrupaVestinaMock: Vestina[] = [
  { grupaVestina: "0001", vestina: "0101" },
  { grupaVestina: "0001", vestina: "0102" },
  { grupaVestina: "0001", vestina: "0103" },

  { grupaVestina: "0002", vestina: "0201" },
  { grupaVestina: "0002", vestina: "0202" },
  { grupaVestina: "0002", vestina: "0203" },

  { grupaVestina: "0003", vestina: "0301" },
  { grupaVestina: "0003", vestina: "0302" },

  { grupaVestina: "0004", vestina: "0401" },
  { grupaVestina: "0004", vestina: "0402" },
];


export default function Vestine () {
    return(
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
      <div className="lg:col-span-1">
        <DataTable 
          columns={vestineColumns}
          data={keGrupaVestinaMock}
        />
      </div>
      <div className="lg:col-span-2">
        <VestineDodatno />
        <VestineOstalo />
      </div >
        
        
    </div>)
}