"use client";

import React, { useState } from "react";
import { MagnifyingGlassIcon, X } from "@phosphor-icons/react";

export interface SelectPopupItem {
  sifra: string;
  naziv: string;
  dodatno?: string;
}

interface SelectPopupProps {
  isOpen: boolean;
  onClose: () => void;
  items: SelectPopupItem[];
  onSelect: (item: SelectPopupItem) => void;
  title?: string;
  searchPlaceholder?: string;
  columns?: {
    sifra?: string;
    naziv?: string;
    dodatno?: string;
  };
}

export function SelectPopup({
  isOpen,
  onClose,
  items,
  onSelect,
  title = "Izaberi stavku",
  searchPlaceholder = "Pretraga...",
  columns = { sifra: "Šifra", naziv: "Naziv" },
}: SelectPopupProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter(
    (item) =>
      item.sifra.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.naziv.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.dodatno?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
  );

  const handleSelect = (item: SelectPopupItem) => {
    onSelect(item);
    setSearchTerm("");
    onClose();
  };

  if (!isOpen) return null;

  const hasDodatno = columns.dodatno && items.some((item) => item.dodatno);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-9999"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-10000 p-4 pointer-events-none">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl flex flex-col pointer-events-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Zatvori"
            >
              <X size={24} />
            </button>
          </div>

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

          {/* Column Headers */}
          {(columns.sifra || columns.naziv || columns.dodatno) && (
            <div className="px-6 py-2 bg-slate-50 border-b border-slate-200">
              <div className="flex items-center gap-4">
                {columns.sifra && (
                  <span className={`text-xs font-semibold text-slate-600 uppercase tracking-wider ${hasDodatno ? 'w-24' : 'w-20'} shrink-0`}>
                    {columns.sifra}
                  </span>
                )}
                {columns.naziv && (
                  <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider flex-1">
                    {columns.naziv}
                  </span>
                )}
                {hasDodatno && columns.dodatno && (
                  <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider w-32 shrink-0">
                    {columns.dodatno}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* List */}
          <div className="overflow-y-auto h-96">
            {filteredItems.length === 0 ? (
              <div className="px-6 py-8 text-center text-slate-500">
                Nema rezultata
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {filteredItems.map((item) => (
                  <button
                    key={item.sifra}
                    onClick={() => handleSelect(item)}
                    className="w-full px-6 py-3 flex items-center gap-4 hover:bg-slate-50 transition-colors text-left"
                  >
                    <span className={`text-sm font-medium text-slate-600 ${hasDodatno ? 'w-24' : 'w-20'} shrink-0`}>
                      {item.sifra}
                    </span>
                    <span className="text-sm text-slate-900 flex-1">{item.naziv}</span>
                    {hasDodatno && item.dodatno && (
                      <span className="text-sm text-slate-600 w-32 shrink-0">
                        {item.dodatno}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
