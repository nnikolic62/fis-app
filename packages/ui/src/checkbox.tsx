"use client";

import React from "react";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const Checkbox = ({ label, className = "", ...props }: CheckboxProps) => {
  return (
    <label className={`flex items-center gap-3 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        className="w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-2 focus:ring-brand-500"
        {...props}
      />
      <span className="text-sm font-medium text-slate-700">{label}</span>
    </label>
  );
};
