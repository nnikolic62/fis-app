"use client";

import React, { forwardRef } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

type TextFieldSize = "sm" | "md" | "lg";
type TextFieldVariant = "default" | "filled" | "flushed";

interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  error?: string;
  size?: TextFieldSize;
  variant?: TextFieldVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  wrapperClassName?: string;
  inputClassName?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      helperText,
      error,
      size = "md",
      variant = "default",
      leftIcon,
      rightIcon,
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
    const inputId = id || `textfield-${React.useId()}`;
    const hasError = !!error;

    // Size styles
    const sizeStyles: Record<TextFieldSize, string> = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2.5 text-sm",
      lg: "px-5 py-3.5 text-base",
    };

    const iconSizeStyles: Record<TextFieldSize, string> = {
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-5 h-5",
    };

    const labelSizeStyles: Record<TextFieldSize, string> = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    };

    // Variant styles
    const variantStyles: Record<TextFieldVariant, string> = {
      default: `
        bg-white border border-slate-300 rounded-lg
        hover:border-slate-400
        focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20
      `,
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

    // Error styles override
    const errorStyles = hasError
      ? `
        border-red-500 
        hover:border-red-600 
        focus:border-red-500 focus:ring-2 focus:ring-red-500/20
      `
      : "";

    // Disabled styles
    const disabledStyles = disabled
      ? "opacity-50 cursor-not-allowed bg-slate-50"
      : "";

    // Base input styles
    const baseInputStyles = `
      w-full
      text-slate-900 
      placeholder:text-slate-400
      transition-all duration-200
      outline-none
    `;

    // Icon padding adjustments
    const leftPadding = leftIcon ? "pl-10" : "";
    const rightPadding = rightIcon ? "pr-10" : "";

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

        {/* Input wrapper for icons */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div
              className={`
                absolute left-3 top-1/2 -translate-y-1/2 
                text-slate-400 pointer-events-none
                ${iconSizeStyles[size]}
                ${hasError ? "text-red-400" : ""}
              `}
            >
              {leftIcon}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            id={inputId}
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
              ${baseInputStyles}
              ${sizeStyles[size]}
              ${variantStyles[variant]}
              ${errorStyles}
              ${disabledStyles}
              ${leftPadding}
              ${rightPadding}
              ${inputClassName}
              ${className || ""}
            `}
            {...rest}
          />

          {/* Right Icon */}
          {rightIcon && (
            <div
              className={`
                absolute right-3 top-1/2 -translate-y-1/2 
                text-slate-400 pointer-events-none
                ${iconSizeStyles[size]}
                ${hasError ? "text-red-400" : ""}
              `}
            >
              {rightIcon}
            </div>
          )}
        </div>

        {/* Error Message */}
        {hasError && (
          <p
            id={`${inputId}-error`}
            className="pl-1 text-xs text-red-600 flex items-center gap-1"
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
          <p
            id={`${inputId}-helper`}
            className="mt-1.5 text-xs text-slate-500"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

