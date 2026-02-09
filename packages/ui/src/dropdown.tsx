import * as SelectPrimitive from '@radix-ui/react-select';
import React from 'react';
import { CaretDownIcon } from "@phosphor-icons/react/CaretDown";
import { CheckIcon } from "@phosphor-icons/react/Check";

type SelectVariant = "default" | "new" | "filled" | "flushed";

interface SelectProps {
  label?: string;
  options: Array<{ value: string; label: string }>;
  error?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  variant?: SelectVariant;
}

export const Select: React.FC<SelectProps> = ({ 
  label, 
  options, 
  error, 
  className = '', 
  placeholder = 'Izaberite...',
  value,
  onValueChange,
  disabled,
  variant = "default"
}) => {
  // Variant styles matching Input component
  const variantStyles: Record<SelectVariant, string> = {
    default: "input",
    new: `input bg-slate-100 border-none focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all duration-200`,
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

  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label className="text-xs w-full font-semibold text-slate-500 uppercase tracking-wide">
          {label}
        </label>
      )}
      
      <SelectPrimitive.Root value={value} onValueChange={onValueChange} disabled={disabled}>
        <SelectPrimitive.Trigger
          className={`
            ${variantStyles[variant]} px-3 py-2.5 text-sm cursor-pointer
            inline-flex items-center justify-between
            ${error ? 'input-error' : ''}
            ${disabled ? 'input-disabled' : ''}
          `}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon>
            <CaretDownIcon />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            className="select-content max-h-96 z-50"
            position="popper"
            sideOffset={5}
          >
            <SelectPrimitive.Viewport className="p-1">
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  className={`
                    relative flex items-center px-8 py-2 text-sm text-slate-900 rounded
                    cursor-pointer outline-none select-none
                    data-highlighted:bg-brand-50 data-highlighted:text-brand-900
                    data-disabled:opacity-50 data-disabled:pointer-events-none
                  `}
                >
                  <SelectPrimitive.ItemIndicator className="absolute left-2">
                    <CheckIcon size={16}/>
                  </SelectPrimitive.ItemIndicator>
                  <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>

      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
};