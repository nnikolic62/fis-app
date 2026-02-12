import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";
import { CaretUpDownIcon } from "@phosphor-icons/react/dist/ssr/CaretUpDown";
import { FormLabel } from "./FormLabel";

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface FormComboboxProps {
  label?: string;
  options: ComboboxOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  id?: string;
}

export function FormCombobox({
  label,
  options,
  placeholder = "Izaberite...",
  searchPlaceholder = "Pretraži...",
  emptyMessage = "Nema rezultata.",
  containerClassName = "",
  labelClassName = "",
  inputClassName = "",
  value,
  onValueChange,
  disabled,
  id,
}: FormComboboxProps) {
  const generatedId = React.useId();
  const autocompleteId = id ?? `form-autocomplete-${generatedId}`;
  const hasLabel = label !== undefined;
  const inputSpacing = hasLabel ? "mt-1" : "";

  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  const filteredOptions = React.useMemo(() => {
    if (!searchQuery) return options;
    
    const query = searchQuery.toLowerCase();
    return options.filter((option) =>
      option.label.toLowerCase().includes(query)
    );
  }, [options, searchQuery]);

  const handleSelect = (selectedValue: string) => {
    onValueChange?.(selectedValue);
    setOpen(false);
    setSearchQuery("");
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setSearchQuery("");
    }
  };

  return (
    <div className={containerClassName}>
      {hasLabel ? (
        <FormLabel label={label} htmlFor={autocompleteId} className={labelClassName} />
      ) : null}
      
      <PopoverPrimitive.Root open={open} onOpenChange={handleOpenChange}>
        <PopoverPrimitive.Trigger asChild>
          <button
            id={autocompleteId}
            type="button"
            disabled={disabled}
            className={`${inputSpacing} inline-flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-2 py-2 text-sm text-slate-900 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-0 focus:border-blue-500 hover:border-slate-300 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 ${inputClassName}`}
          >
            <span className={selectedOption ? "text-slate-900" : "text-slate-400"}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <CaretUpDownIcon className="text-slate-500" width={16} height={16} />
          </button>
        </PopoverPrimitive.Trigger>

        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            className="z-50 w-(--radix-popover-trigger-width) rounded-lg border border-slate-200 bg-white p-0 shadow-lg"
            align="start"
            sideOffset={6}
          >
            <div className="flex items-center border-b border-slate-200 px-3">
              <MagnifyingGlassIcon className="text-slate-400" width={16} height={16} />
              <input
                ref={inputRef}
                type="text"
                className="flex h-10 w-full bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="max-h-60 overflow-y-auto p-1">
              {filteredOptions.length === 0 ? (
                <div className="py-6 text-center text-sm text-slate-400">
                  {emptyMessage}
                </div>
              ) : (
                filteredOptions.map((option) => {
                  const isSelected = value === option.value;
                  
                  return (
                    <button
                      key={option.value}
                      type="button"
                      className="relative flex w-full cursor-pointer select-none items-center rounded-md px-9 py-2 text-sm text-slate-900 outline-none hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700 data-[selected]:font-medium"
                      onClick={() => handleSelect(option.value)}
                      data-selected={isSelected ? "" : undefined}
                    >
                      {isSelected && (
                        <span className="absolute left-2 text-blue-600">
                          <CheckIcon width={16} height={16} />
                        </span>
                      )}
                      <span>{option.label}</span>
                    </button>
                  );
                })
              )}
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </div>
  );
}