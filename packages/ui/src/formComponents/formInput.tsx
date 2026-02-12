"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { FormLabel } from "./FormLabel";

type FormInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  label?: string;
  containerClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  disabled?: boolean;
  required?: boolean;
  endIcon?: React.ReactNode;
  onIconClick?: () => void;
};

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      label,
      containerClassName = "",
      inputClassName = "",
      errorClassName = "",
      id,
      disabled = false,
      required = false,
      endIcon,
      onIconClick,
      ...rest
    },
    ref
  ) => {
  const generatedId = React.useId();
  const inputId = id ?? `form-input-${generatedId}`;
  const hasLabel = label !== undefined;
  const inputSpacing = hasLabel ? "mt-1" : "";
  const { formState: { errors } } = useFormContext();
  
  const fieldName = rest.name;
  const fieldError = fieldName && typeof fieldName === "string" ? errors[fieldName] : undefined;
  const borderStyles = fieldError
    ? "border-red-500 focus:border-red-500 focus:ring-red-200"
    : "border-slate-200 focus:border-blue-500 focus:ring-blue-200";

  const paddingRight = endIcon ? "pr-6" : "pr-2";

  return (
    <div className={containerClassName}>
      {hasLabel && (
        <FormLabel
          htmlFor={inputId}
          label={label}
          required={required}
          disabled={disabled}
        />
      )}
      <div className="relative">
        <input
          id={inputId}
          ref={ref}
          className={`${inputSpacing} block w-full rounded-lg border bg-white px-2 ${paddingRight} py-2 text-sm text-slate-900 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 placeholder:text-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 ${borderStyles} ${inputClassName}`}
          disabled={disabled}
          {...rest}
        />
        {endIcon && (
          <div
            className={`absolute inset-y-0 right-0 flex items-center pr-1.5 ${
              onIconClick ? "cursor-pointer" : "pointer-events-none"
            }`}
            onClick={onIconClick}
          >
            {endIcon}
          </div>
        )}
      </div>
      {fieldError && (
          <p
            id={`${inputId}-error`}
            className={`pl-1 text-xxs text-red-600 flex items-center gap-1 ${errorClassName}`}
            role="alert"
          >
            <svg
              className="w-3.5 h-3.5 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {fieldError.message as string}
          </p>
        )}
    </div>
  );
});
