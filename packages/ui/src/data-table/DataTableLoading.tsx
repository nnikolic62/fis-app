type DataTableLoadingProps = {
    columnCount: number;
    rowCount?: number;
};

export function DataTableLoading({ columnCount, rowCount = 5 }: DataTableLoadingProps) {
  return (
    <>
      {Array.from({ length: rowCount }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {Array.from({ length: columnCount }).map((_, colIndex) => (
            <td key={colIndex}>
              <div className="skeleton" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};