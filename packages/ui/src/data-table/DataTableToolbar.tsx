import { Table } from "@tanstack/react-table";

type DataTableToolbarProps<TData> = {
  table: Table<TData>;
  children: React.ReactNode;
};

export function DataTableToolbar<TData>({ children, table }: DataTableToolbarProps<TData>) {
  const selectedRows = table.getFilteredSelectedRowModel().rows;

  return (
    <div className="table-toolbar">
      <div className="table-toolbar-left">
        {selectedRows.length > 0 && (
          <div className="selection-info">
            {selectedRows.length} row(s) selected
          </div>
        )}
      </div>

      <div className="table-toolbar-right">
        {children}
      </div>
    </div>
  );
}
