import { createColumnHelper } from "@tanstack/react-table";

export function createSelectColumn<T>() {
    const columnHelper = createColumnHelper<T>();

    return columnHelper.display({
        id: "select",
        cell: ({ row }) => (
            <div className="flex items-center justify-center">
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
            <span className="text-sm text-slate-700">X</span>
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    });
}