import clsx from "clsx";

const gridCols: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

export interface ListColumn<T> {
  key: keyof T;
  label: string;
}

interface ListProps<T extends Record<string, unknown>> {
  items: T[];
  columns: ListColumn<T>[];
  onItemClick?: (item: T) => void;
  emptyMessage?: string;
  className?: string;
}

export function List<T extends Record<string, unknown>>({
  items,
  columns,
  onItemClick,
  emptyMessage = "Nema rezultata",
  className,
}: ListProps<T>) {
  const colCount = columns.length;
  const gridClass = gridCols[colCount] ?? "grid-cols-1";

  return (
    <div className={className}>
      {/* Column Headers */}
      <div className={clsx("grid bg-slate-50 border-b border-slate-200 px-6 py-2", gridClass)}>
        {columns.map((col) => (
          <span
            key={String(col.key)}
            className="text-xs font-semibold text-slate-600 uppercase tracking-wider"
          >
            {col.label}
          </span>
        ))}
      </div>

      {/* Rows */}
      <div className="overflow-y-auto">
        {items.length === 0 ? (
          <div className="px-6 py-8 text-center text-slate-500">
            {emptyMessage}
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {items.map((item, idx) => {
              const row = (
                <div
                  key={idx}
                  className={clsx(
                    "w-full grid px-6 py-3 text-left",
                    gridClass,
                    onItemClick && "hover:bg-slate-50 transition-colors cursor-pointer"
                  )}
                  role={onItemClick ? "button" : undefined}
                  tabIndex={onItemClick ? 0 : undefined}
                  onClick={onItemClick ? () => onItemClick(item) : undefined}
                  onKeyDown={
                    onItemClick
                      ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onItemClick(item); } }
                      : undefined
                  }
                >
                  {columns.map((col) => (
                    <span key={String(col.key)} className="text-sm text-slate-700 truncate">
                      {String(item[col.key] ?? "")}
                    </span>
                  ))}
                </div>
              );
              return row;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

