import type { ReactNode } from "react";

export type StatCardProps = {
  title: string;
  value: ReactNode;
  badge?: ReactNode;
  icon?: ReactNode;
  iconColorClass?: string;
};

export function StatCard({
  title,
  value,
  badge,
  icon,
  iconColorClass = "bg-slate-50 text-slate-600",
}: StatCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
      <div>
        <p className="text-sm text-slate-500 font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-slate-800 mt-1">{value}</h3>
        {badge ? <div className="mt-1">{badge}</div> : null}
      </div>
      {icon ? (
        <div className={`p-2 rounded-lg ${iconColorClass}`}>{icon}</div>
      ) : null}
    </div>
  );
}
