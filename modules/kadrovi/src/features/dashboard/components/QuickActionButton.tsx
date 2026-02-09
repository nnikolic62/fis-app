import type { ReactNode } from "react";

type Accent = "blue" | "emerald" | "purple" | "amber" | "slate";

const accentClasses: Record<Accent, { base: string; hover: string }> = {
  blue: {
    base: "bg-blue-50 text-blue-600",
    hover: "group-hover:bg-blue-600 group-hover:text-white",
  },
  emerald: {
    base: "bg-emerald-50 text-emerald-600",
    hover: "group-hover:bg-emerald-600 group-hover:text-white",
  },
  purple: {
    base: "bg-purple-50 text-purple-600",
    hover: "group-hover:bg-purple-600 group-hover:text-white",
  },
  amber: {
    base: "bg-amber-50 text-amber-600",
    hover: "group-hover:bg-amber-600 group-hover:text-white",
  },
  slate: {
    base: "bg-slate-50 text-slate-600",
    hover: "group-hover:bg-slate-600 group-hover:text-white",
  },
};

export type QuickActionButtonProps = {
  label: string;
  accent?: Accent;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export function QuickActionButton({
  label,
  accent = "blue",
  icon,
  onClick,
  type = "button",
}: QuickActionButtonProps) {
  const classes = accentClasses[accent];

  return (
    <button
      type={type}
      onClick={onClick}
      className="flex flex-col items-center justify-center p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group"
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-colors ${classes.base} ${classes.hover}`}
      >
        {icon}
      </div>
      <span className="text-sm font-medium text-slate-700">{label}</span>
    </button>
  );
}
