import { Table } from "@tanstack/react-table";

type DataTablePaginationProps<TData> = {
    table: Table<TData>;
    rowCount?: number;
    manualPagination?: boolean;
  };

export function DataTablePagination<TData>({
    table,
    rowCount,
    manualPagination,
  }: DataTablePaginationProps<TData>) {
    const currentPage = table.getState().pagination.pageIndex;
    const pageSize = table.getState().pagination.pageSize;
    const totalRows = rowCount ?? table.getFilteredRowModel().rows.length;
    const pageCount = manualPagination 
      ? table.getPageCount()
      : Math.ceil(totalRows / pageSize);
  
    const startRow = currentPage * pageSize + 1;
    const endRow = Math.min((currentPage + 1) * pageSize, totalRows);
  
    return (
      <div className="table-pagination">
        <div className="pagination-info">
          Showing {startRow} to {endRow} of {totalRows} results
        </div>
  
        <div className="pagination-controls">
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="pagination-button"
          >
            {'<<'}
          </button>
          
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="pagination-button"
          >
            {'<'}
          </button>
  
          <span className="pagination-page-info">
            Page {currentPage + 1} of {pageCount}
          </span>
  
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="pagination-button"
          >
            {'>'}
          </button>
          
          <button
            onClick={() => table.setPageIndex(pageCount - 1)}
            disabled={!table.getCanNextPage()}
            className="pagination-button"
          >
            {'>>'}
          </button>
  
          <select
            value={pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="page-size-select"
          >
            {[10, 20, 50, 100].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };