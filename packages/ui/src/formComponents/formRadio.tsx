"use client";

import React from "react";

type FormRadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label: string;
  labelClassName?: string;
};

export function FormRadio({
  label,
  labelClassName = "",
  className = "",
  ...rest
}: FormRadioProps) {
  return (
    <label className={`flex items-center gap-2 text-sm text-slate-700 ${className}`}>
      <input
        type="radio"
        className="relative h-4 w-4 shrink-0 appearance-none rounded-full border border-slate-300 bg-white text-blue-600 shadow-sm transition-colors focus:ring-2 focus:ring-blue-200 focus:ring-offset-0 hover:border-slate-400 checked:border-blue-600 checked:before:absolute checked:before:inset-1 checked:before:block checked:before:rounded-full checked:before:bg-blue-600 checked:before:content-[''] disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-50"
        {...rest}
      />
      <span className={`select-none ${labelClassName}`}>{label}</span>
    </label>
  );
}
