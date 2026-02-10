import { DataTable } from "@repo/ui/data-table/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Vestina } from "../../shared/schemas/keGrupaVestina";
import { KADROVI_NS } from "../../../config/i18n";
import { i18n } from "@repo/i18n-config";




export const vestineColumns: ColumnDef<Vestina>[] = [
    {
        header: "",
        accessorKey: "grupaVestina"
    },
    {
        header: i18n.t(`${KADROVI_NS}:pregled-radnika.vestina`),
        accessorKey: "vestina"
    }
]


export default function Vestine () {
    return(<>
    <DataTable 
        columns={vestineColumns}
        data={[]}
    />
    </>)
}