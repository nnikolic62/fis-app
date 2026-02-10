import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

import { DataTableToolbar } from "./DataTableToolbar";
import { Table, ColumnDef, TableOptions, Row } from "@tanstack/react-table";
import { DataTableLoading } from "./DataTableLoading";
import { DataTableEmpty } from "./DataTableEmpty";
import { DataTablePagination } from "./DataTablePagination";
import { createSelectColumn } from "./select-column";
import { useEffect, useMemo } from "react";

type DataTableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData>[];

  tableOptions?: Partial<TableOptions<TData>>;

  topToolbar?: (table: Table<TData>) => React.ReactNode;
  rowActions?: (row: Row<TData>) => React.ReactNode;

  enablePagination?: boolean;
  manualPagination?: boolean;
  rowCount?: number;
  isLoading?: boolean;
  emptyMessage?: string;
  onSelectedRowsChange?: (rows: TData[]) => void;
};

export function DataTable<TData>({
  data,
  columns,
  tableOptions,
  topToolbar,
  rowActions,
  enablePagination = false,
  manualPagination = false,
  rowCount,
  isLoading,
  emptyMessage = "No results.",
  onSelectedRowsChange,
}: DataTableProps<TData>) {
  const finalColumns = useMemo(() => {
    if (!tableOptions?.enableRowSelection) return columns;
  
    return [createSelectColumn<TData>(), ...columns];
  }, [columns, tableOptions?.enableRowSelection]);

  const table = useReactTable({
    data,
    columns: finalColumns,

    getCoreRowModel: getCoreRowModel(),
    ...(enablePagination && { getPaginationRowModel: getPaginationRowModel() }),

    ...tableOptions,
  });

  const rowSelectionState = table.getState().rowSelection;
  useEffect(() => {
    if (!onSelectedRowsChange) return;
    const selectedRows = table
      .getSelectedRowModel()
      .rows.map((row) => row.original);
    onSelectedRowsChange(selectedRows);
  }, [onSelectedRowsChange, rowSelectionState, table]);

  return (
    <div>
      {topToolbar && (
        <DataTableToolbar table={table}>
          {topToolbar(table)}
        </DataTableToolbar>
      )}

      <div className="table-wrapper">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}

                {rowActions && <th className="row-actions-header">Actions</th>}
              </tr>
            ))}
          </thead>

          <tbody>
            {isLoading ? (
              <DataTableLoading
                columnCount={columns.length + (rowActions ? 1 : 0)}
              />
            ) : data.length === 0 ? (
              <DataTableEmpty
                columnCount={columns.length + (rowActions ? 1 : 0)}
                message={emptyMessage}
              />
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className={row.getIsSelected() ? "row-selected" : ""}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                  {rowActions && (
                    <td className="row-actions">{rowActions(row)}</td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {enablePagination && (
        <DataTablePagination
          table={table}
          rowCount={rowCount}
          manualPagination={manualPagination}
        />
      )}
    </div>
  );
}
