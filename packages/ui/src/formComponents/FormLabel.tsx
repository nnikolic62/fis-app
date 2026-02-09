"use client";

import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

type FormLabelProps = {
  htmlFor: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
};

export function FormLabel({
  htmlFor,
  label,
  required = false,
  disabled = false,
  className = "",
}: FormLabelProps) {
  if (label === undefined) {
    return null;
  }

  return (
    <LabelPrimitive.Root
      htmlFor={htmlFor}
      className={`block mb-1 font-medium text-slate-600 text-xs ${
        disabled ? "opacity-50" : ""
      } ${className}`}
    >
      {label}
      {required && (
        <span className="ml-0.5 text-red-500" aria-hidden="true">
          *
        </span>
      )}
    </LabelPrimitive.Root>
  );
}

