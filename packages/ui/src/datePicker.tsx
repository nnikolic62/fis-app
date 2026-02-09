"use client";

import React, { forwardRef } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { CalendarBlankIcon } from "@phosphor-icons/react/CalendarBlank";

type DatePickerSize = "sm" | "md" | "lg";
type DatePickerVariant = "default" | "new" | "filled" | "flushed";

interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  helperText?: string;
  error?: string;
  size?: DatePickerSize;
  variant?: DatePickerVariant;
  fullWidth?: boolean;
  wrapperClassName?: string;
  inputClassName?: string;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      label,
      helperText,
      error,
      size = "md",
      variant = "default",
      fullWidth = false,
      wrapperClassName = "",
      inputClassName = "",
      id,
      disabled,
      required,
      className,
      ...rest
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || `datepicker-${generatedId}`;
    const hasError = !!error;

    // Size styles
    const sizeStyles: Record<DatePickerSize, string> = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2.5 text-sm",
      lg: "px-5 py-3.5 text-base",
    };

    const iconSizeStyles: Record<DatePickerSize, number> = {
      sm: 14,
      md: 16,
      lg: 18,
    };

    const labelSizeStyles: Record<DatePickerSize, string> = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    };

    // Variant styles matching Input component
    const variantStyles: Record<DatePickerVariant, string> = {
      default: "input",
      new: `input bg-slate-100 border-none focus:bg-white focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-blue-600 transition-all duration-200`,
      filled: `
        bg-slate-100 border border-transparent rounded-lg
        hover:bg-slate-200
        focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20
      `,
      flushed: `
        bg-transparent border-b-2 border-slate-300 rounded-none px-0
        hover:border-slate-400
        focus:border-brand-500
      `,
    };

    // Error styles
    const errorStyles = hasError ? "input-error" : "";

    // Disabled styles
    const disabledStyles = disabled ? "input-disabled" : "";

    return (
      <div
        className={`
          ${fullWidth ? "w-full" : "w-fit"}
          ${wrapperClassName}
        `}
      >
        {/* Label */}
        {label && (
          <LabelPrimitive.Root
            htmlFor={inputId}
            className={`
              block mb-1 font-medium text-slate-600
              ${labelSizeStyles[size]}
              ${disabled ? "opacity-50" : ""}
              ${hasError ? "text-red-600" : ""}
            `}
          >
            {label}
            {required && (
              <span className="ml-0.5 text-red-500" aria-hidden="true">
                *
              </span>
            )}
          </LabelPrimitive.Root>
        )}

        {/* Input wrapper with icon */}
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type="date"
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${inputId}-error`
                : helperText
                  ? `${inputId}-helper`
                  : undefined
            }
            className={`
              ${sizeStyles[size]}
              ${variantStyles[variant]}
              ${errorStyles}
              ${disabledStyles}
              pr-10
              ${inputClassName}
              ${className || ""}
            `}
            {...rest}
          />

          {/* Calendar Icon */}
          <div
            className={`
              absolute right-3 top-1/2 -translate-y-1/2 
              text-slate-400 pointer-events-none
              ${hasError ? "text-red-400" : ""}
            `}
          >
            <CalendarBlankIcon size={iconSizeStyles[size]} />
          </div>
        </div>

        {/* Error Message */}
        {hasError && (
          <p
            id={`${inputId}-error`}
            className="pl-1 text-xs text-red-600 flex items-center gap-1 mt-1"
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
            {error}
          </p>
        )}

        {/* Helper Text */}
        {helperText && !hasError && (
          <p id={`${inputId}-helper`} className="mt-1.5 text-xs text-slate-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

DatePicker.displayName = "DatePicker";
