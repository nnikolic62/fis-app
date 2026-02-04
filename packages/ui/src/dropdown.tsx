import * as SelectPrimitive from '@radix-ui/react-select';
// import { Check, ChevronDown } from 'lucide-react';
import React from 'react';
import { CheckIcon, ChevronDownIcon } from './icons';

interface SelectProps {
  label?: string;
  options: Array<{ value: string; label: string }>;
  error?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({ 
  label, 
  options, 
  error, 
  className = '', 
  placeholder = 'Izaberite...',
  value,
  onValueChange,
  disabled 
}) => {
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
            input px-3 py-2.5 text-sm cursor-pointer
            inline-flex items-center justify-between
            ${error ? 'input-error' : ''}
            ${disabled ? 'input-disabled' : ''}
          `}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon>
            <ChevronDownIcon />
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
                    <CheckIcon />
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