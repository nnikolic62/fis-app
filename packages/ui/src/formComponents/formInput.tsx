"use client";

import React from "react";

type FormInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
};

export function FormInput({
  label,
  containerClassName = "",
  labelClassName = "",
  inputClassName = "",
  id,
  ...rest
}: FormInputProps) {
  const generatedId = React.useId();
  const inputId = id ?? `form-input-${generatedId}`;
  const hasLabel = label !== undefined;
  const isBlankLabel = label === "";
  const inputSpacing = hasLabel ? "mt-1" : "";

  return (
    <div className={containerClassName}>
      {hasLabel ? (
        <label
          htmlFor={inputId}
          className={`block text-sm font-medium text-gray-700 ${
            isBlankLabel ? "invisible" : ""
          } ${labelClassName}`}
        >
          {isBlankLabel ? " " : label}
        </label>
      ) : null}
      <input
        id={inputId}
        className={`${inputSpacing} block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-0 placeholder:text-slate-400 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 ${inputClassName}`}
        {...rest}
      />
    </div>
  );
}
