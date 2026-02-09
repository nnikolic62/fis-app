"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { CaretDownIcon } from "@phosphor-icons/react/CaretDown";
import { CheckIcon } from "@phosphor-icons/react/Check";
import React from "react";
import { FormLabel } from "./FormLabel";

type FormSelectOption = {
  value: string;
  label: string;
};

type FormSelectProps = {
  label?: string;
  options: FormSelectOption[];
  placeholder?: string;
  containerClassName?: string;
  labelClassName?: string;
  selectClassName?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  id?: string;
};

export function FormSelect({
  label,
  options,
  placeholder = "Izaberite...",
  containerClassName = "",
  labelClassName = "",
  selectClassName = "",
  value,
  onValueChange,
  disabled,
  id,
}: FormSelectProps) {
  const generatedId = React.useId();
  const selectId = id ?? `form-select-${generatedId}`;
  const hasLabel = label !== undefined;
  const selectSpacing = hasLabel ? "mt-1" : "";

  return (
    <div className={containerClassName}>
      {hasLabel ? (
        <FormLabel label={label} htmlFor={selectId} />
      ) : null}
      <SelectPrimitive.Root
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
      >
        <SelectPrimitive.Trigger
          id={selectId}
          className={`${selectSpacing} inline-flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-0 focus:border-blue-500 hover:border-slate-300 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 ${selectClassName}`}
        >
          <SelectPrimitive.Value
            className="text-slate-900 data-placeholder:text-slate-400"
            placeholder={placeholder}
          />
          <SelectPrimitive.Icon className="text-slate-500">
            <CaretDownIcon size={16} />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            className="select-content z-50 max-h-60 min-w-(--radix-select-trigger-width)"
            position="popper"
            sideOffset={6}
          >
            <SelectPrimitive.Viewport className="p-1">
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  className="relative flex cursor-pointer select-none items-center rounded-md px-9 py-2 text-sm text-slate-900 outline-none data-[highlighted]:bg-blue-50 data-[highlighted]:text-blue-700 data-[state=checked]:font-medium"
                >
                  <SelectPrimitive.ItemIndicator className="absolute left-2 text-blue-600">
                    <CheckIcon size={16} />
                  </SelectPrimitive.ItemIndicator>
                  <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </div>
  );
}
