import { Table } from "@tanstack/react-table";

type DataTableToolbarProps<TData> = {
  table: Table<TData>;
  children: React.ReactNode;
};

export function DataTableToolbar<TData>({ children, table }: DataTableToolbarProps<TData>) {
  const selectedRows = table.getFilteredSelectedRowModel().rows;

  return (
    <div className="table-toolbar">
      {/* {selectedRows.length > 0 && (
        <div className="table-toolbar-left">
          <div className="selection-info">
            {selectedRows.length} row(s) selected
          </div>
        </div>
      )}

      <div className={`table-toolbar-${selectedRows.length > 0 ? 'right' : 'left'}`}>
        {children}
      </div> */}
      <div className={`table-toolbar-left`}>
        {children}
      </div>
    </div>
  );
}
