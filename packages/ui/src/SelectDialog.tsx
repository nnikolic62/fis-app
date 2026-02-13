"use client";

import { useMemo, useState } from "react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Dialog } from "./Dialog";
import { List } from "./List";

export interface SelectDialogItem {
  sifra: string;
  naziv: string;
  dodatno?: string;
}

interface SelectDialogProps<T extends Record<string, unknown>> {
  isOpen: boolean;
  onClose: () => void;
  items: T[];
  onSelect: (item: T) => void;
  title?: string;
  searchPlaceholder?: string;
  columns: Partial<Record<keyof T, string>>;
}

export function SelectDialog<T extends Record<string, unknown>>({
  isOpen,
  onClose,
  items,
  onSelect,
  title = "Izaberi stavku",
  searchPlaceholder = "Pretraga...",
  columns,
}: SelectDialogProps<T>) {
  const [searchTerm, setSearchTerm] = useState("");

  const listColumns = useMemo(
    () => (Object.entries(columns) as [keyof T, string][]).map(([key, label]) => ({ key, label })),
    [columns]
  );

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return items;
    const term = searchTerm.toLowerCase();
    return items.filter((item) =>
      listColumns.some(({ key }) => String(item[key] ?? "").toLowerCase().includes(term))
    );
  }, [items, searchTerm, listColumns]);

  const handleSelect = (item: T) => {
    onSelect(item);
    setSearchTerm("");
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
      title={title}
    >
      {/* Search */}
      <div className="px-6 py-4 border-b border-slate-200">
        <div className="relative">
          <MagnifyingGlassIcon
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            autoFocus
          />
        </div>
      </div>

      {/* List */}
      <List
        items={filteredItems}
        columns={listColumns}
        onItemClick={handleSelect}
        className="h-96 overflow-y-auto"
      />
    </Dialog>
  );
}
