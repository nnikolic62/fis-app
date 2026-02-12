"use client";

import React from "react";

type FormCheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label: string;
  labelClassName?: string;
};

export function FormCheckbox({
  label,
  labelClassName = "",
  className = "",
  ...rest
}: FormCheckboxProps) {
  return (
    <label className={`flex items-center gap-2 text-sm text-slate-700 ${className}`}>
      <input
        type="checkbox"
        className="relative h-4 w-4 shrink-0 appearance-none rounded border border-slate-300 bg-white text-blue-600 shadow-sm transition-colors focus:ring-2 focus:ring-blue-200 focus:ring-offset-0 hover:border-slate-400 checked:border-blue-600 checked:bg-blue-600 checked:before:absolute checked:before:left-[5px] checked:before:top-[2px] checked:before:block checked:before:h-[8px] checked:before:w-[4px] checked:before:rotate-45 checked:before:border checked:before:border-white checked:before:border-l-0 checked:before:border-t-0 checked:before:content-[''] disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-100"
        {...rest}
      />
      <span className={`select-none ${labelClassName}`}>{label}</span>
    </label>
  );
}
