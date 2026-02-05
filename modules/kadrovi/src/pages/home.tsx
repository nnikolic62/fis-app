import { Badge } from "@repo/ui/badge";
import { Card } from "@repo/ui/card";
import { Button } from "@repo/ui/button";
import { BriefcaseIcon, CaretRightIcon, ChartBarIcon, ClockIcon, FileTextIcon, MagnifyingGlassIcon, PlusIcon, UsersIcon, WarningCircleIcon } from "@phosphor-icons/react";

import { QuickActionButton } from "../components/QuickActionButton";
import { StatCard } from "../components/StatCard";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        Pregled sistema
      </h1>

      {/* QUICK STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Ukupno Zaposlenihs"
          value="1,248"
          badge={<Badge variant="success">+12 ovog meseca</Badge>}
          icon={<UsersIcon size={24} />}
          iconColorClass="bg-brand-50 text-brand-600"
        />
        <StatCard
          title="Ističe Ugovor (30 dana)"
          value="8"
          badge={<Badge variant="warning">Potrebna akcija</Badge>}
          icon={<WarningCircleIcon size={24} />}
          iconColorClass="bg-orange-50 text-orange-600"
        />
        <StatCard
          title="Na Odsustvu Danas"
          value="42"
          badge={
            <span className="text-xs text-slate-400">
              3 bolovanja, 39 odmora
            </span>
          }
          icon={<BriefcaseIcon size={24} />}
          iconColorClass="bg-purple-50 text-purple-600"
        />
        <StatCard
          title="Neproknjižena Rešenja"
          value="15"
          badge={
            <span className="text-xs text-brand-600 cursor-pointer hover:underline">
              Pregledaj listu
            </span>
          }
          icon={<FileTextIcon size={24} />}
          iconColorClass="bg-red-50 text-red-600"
        />
      </div>

      {/* QUICK ACCESS (Tačka 8 - Opciono, ali najbitnije) */}
      <h2 className="text-lg font-semibold text-slate-700 mb-4">Brze Akcije</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        <QuickActionButton icon={<PlusIcon size={20} />} label="Nova Prijava" accent="blue" />
        <QuickActionButton icon={<FileTextIcon size={20} />} label="Novo Rešenje" accent="emerald" />
        <QuickActionButton icon={<ClockIcon size={20} />} label="Unos Odsustva" accent="purple" />
        <QuickActionButton icon={<ChartBarIcon size={20} />} label="Izveštaj Stanja" accent="amber" />
        <QuickActionButton icon={<MagnifyingGlassIcon size={20} />} label="Traži Radnika" accent="slate" />
      </div>

      {/* TWO COLUMNS LAYOUT BELOW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recently Accessed */}
        <Card
          title="Nedavno otvoreni radnici"
          action={
            <Button
              variant="ghost"
              size="sm"
              className="text-brand-600 h-auto p-0 hover:bg-transparent hover:underline"
            >
              Vidi sve
            </Button>
          }
          noPadding
        >
          <div className="divide-y divide-slate-100">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="px-6 py-3 hover:bg-slate-50 cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                    JP
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      Jovan Petrović
                    </p>
                    <p className="text-xs text-slate-500">
                      Magacioner • OJ Logistika
                    </p>
                  </div>
                </div>
                <CaretRightIcon
                  size={16}
                  className="text-slate-300 group-hover:text-slate-500"
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Tasks / Notifications */}
        <Card title="Zadaci i Obaveštenja">
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="mt-1 min-w-2 h-2 rounded-full bg-red-500"></div>
              <div>
                <p className="text-sm text-slate-800 font-medium">
                  Potrebna provera sistematizacije za OJ Finansije
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Pre 2 sata • Poslao: Direktor
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 min-w-2 h-2 rounded-full bg-yellow-500"></div>
              <div>
                <p className="text-sm text-slate-800 font-medium">
                  Ističe lekarski pregled za 5 vozača
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Pre 4 sata • Sistem
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 min-w-2 h-2 rounded-full bg-blue-500"></div>
              <div>
                <p className="text-sm text-slate-800 font-medium">
                  Ažuriran šifarnik opština
                </p>
                <p className="text-xs text-slate-500 mt-1">Juče • IT Služba</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
