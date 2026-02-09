"use client";

import React, { forwardRef } from "react";

interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  description?: string;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, description, className = "", ...rest }, ref) => {
    return (
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          ref={ref}
          type="radio"
          className={`
            mt-0.5 h-4 w-4 text-blue-600 border-slate-300
            focus:ring-2 focus:ring-blue-600/30 focus:ring-offset-0
            transition-all duration-150
            disabled:cursor-not-allowed disabled:opacity-50
            ${className}
          `}
          {...rest}
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
            {label}
          </span>
          {description && (
            <span className="text-xs text-slate-500">{description}</span>
          )}
        </div>
      </label>
    );
  }
);

RadioButton.displayName = "RadioButton";
