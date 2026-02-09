"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { CalendarBlankIcon } from "@phosphor-icons/react/CalendarBlank";
import { CaretLeftIcon } from "@phosphor-icons/react/CaretLeft";
import { CaretRightIcon } from "@phosphor-icons/react/CaretRight";
import { FormLabel } from "./FormLabel";

type FormDatePickerProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "defaultValue" | "onChange"
> & {
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
};

const DATE_PATTERN = /^([0-2]?\d|3[01])\.(0?\d|1[0-2])\.(\d{4})$/;
const MAX_DATE_DIGITS = 8;
const DATE_SEPARATOR = ".";
const MONTH_NAMES = [
  "Januar",
  "Februar",
  "Mart",
  "April",
  "Maj",
  "Jun",
  "Jul",
  "Avgust",
  "Septembar",
  "Oktobar",
  "Novembar",
  "Decembar",
];
const WEEKDAYS = ["Po", "Ut", "Sr", "Ce", "Pe", "Su", "Ne"];

function parseDisplayDate(value: string): Date | null {
  const match = DATE_PATTERN.exec(value.trim());
  if (!match) {
    return null;
  }

  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}

function formatDisplayDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${day}.${month}.${year}`;
}

function parseIsoDate(value: string): Date | null {
  if (!value) {
    return null;
  }

  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) {
    return null;
  }

  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}

function formatIsoDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${year}-${month}-${day}`;
}

export function FormDatePicker({
  label,
  containerClassName = "",
  labelClassName = "",
  inputClassName = "",
  value,
  defaultValue = "",
  onValueChange,
  placeholder = "dd.mm.yyyy",
  id,
  disabled,
  min,
  max,
  ...rest
}: FormDatePickerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const generatedId = React.useId();
  const inputId = id ?? `form-date-${generatedId}`;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [popoverStyle, setPopoverStyle] = useState({
    top: 0,
    left: 0,
    width: 288,
  });
  const isControlled = value !== undefined;
  const displayValue = isControlled ? value : internalValue;
  const parsedDisplayDate = useMemo(
    () => parseDisplayDate(displayValue),
    [displayValue]
  );
  const [viewDate, setViewDate] = useState(
    parsedDisplayDate ?? new Date()
  );

  const setValue = (nextValue: string) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onValueChange?.(nextValue);
  };

  const formatInputValue = (rawValue: string) => {
    if (rawValue.includes(DATE_SEPARATOR)) {
      const sanitized = rawValue.replace(/[^\d.]/g, "");
      const parts = sanitized
        .split(".")
        .slice(0, 3)
        .map((part, index) => {
          const limit = index < 2 ? 2 : 4;
          return part.slice(0, limit);
        });

      return parts.join(".");
    }

    const digits = rawValue.replace(/\D/g, "").slice(0, MAX_DATE_DIGITS);
    if (digits.length <= 2) {
      return digits;
    }
    if (digits.length <= 4) {
      return `${digits.slice(0, 2)}.${digits.slice(2)}`;
    }
    return `${digits.slice(0, 2)}.${digits.slice(2, 4)}.${digits.slice(4)}`;
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(formatInputValue(event.target.value));
  };

  const handleTextBlur = () => {
    if (!displayValue.trim()) {
      return;
    }

    const parsed = parseDisplayDate(displayValue);
    if (parsed) {
      setValue(formatDisplayDate(parsed));
    }
  };

  const handlePickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = parseIsoDate(event.target.value);
    if (parsed) {
      setValue(formatDisplayDate(parsed));
    }
  };

  const updatePopoverPosition = useCallback(() => {
    if (!triggerRef.current) {
      return;
    }

    const rect = triggerRef.current.getBoundingClientRect();
    const popoverWidth = 288;
    const viewportPadding = 8;
    const maxLeft = window.innerWidth - popoverWidth - viewportPadding;
    let left = rect.right - popoverWidth;
    if (left < viewportPadding) {
      left = viewportPadding;
    }
    if (left > maxLeft) {
      left = Math.max(viewportPadding, maxLeft);
    }

    setPopoverStyle({
      top: rect.bottom + 8,
      left,
      width: popoverWidth,
    });
  }, []);

  const handleOpenPicker = () => {
    if (disabled) {
      return;
    }

    setIsOpen((prev) => !prev);
    updatePopoverPosition();
  };

  const handleSelectDate = (date: Date) => {
    setValue(formatDisplayDate(date));
    setIsOpen(false);
  };

  useEffect(() => {
    if (parsedDisplayDate) {
      setViewDate(parsedDisplayDate);
    }
  }, [parsedDisplayDate]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    updatePopoverPosition();

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        containerRef.current?.contains(target) ||
        popoverRef.current?.contains(target)
      ) {
        return;
      }

      setIsOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleViewportChange = () => updatePopoverPosition();

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("scroll", handleViewportChange, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("scroll", handleViewportChange, true);
    };
  }, [isOpen, updatePopoverPosition]);

  const monthStart = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const daysInMonth = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth() + 1,
    0
  ).getDate();
  const startOffset = (monthStart.getDay() + 6) % 7;

  const minDate = min ? parseIsoDate(String(min)) ?? parseDisplayDate(String(min)) : null;
  const maxDate = max ? parseIsoDate(String(max)) ?? parseDisplayDate(String(max)) : null;

  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) {
      return true;
    }
    if (maxDate && date > maxDate) {
      return true;
    }
    return false;
  };

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const hasLabel = label !== undefined;
  const inputSpacing = hasLabel ? "mt-1" : "";

  return (
    <div className={containerClassName} ref={containerRef}>
      {hasLabel ? (
        <FormLabel label={label} htmlFor={inputId} />
      ) : null}
      <div className="relative" ref={triggerRef}>
        <input
          id={inputId}
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder={placeholder}
          value={displayValue}
          onChange={handleTextChange}
          onBlur={handleTextBlur}
          disabled={disabled}
          pattern="\\d{2}\\.\\d{2}\\.\\d{4}"
          className={`${inputSpacing} block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 pr-10 text-sm text-slate-900 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-0 placeholder:text-slate-400 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 ${inputClassName}`}
          {...rest}
        />
        <button
          type="button"
          onClick={handleOpenPicker}
          aria-label="Open date picker"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition-colors hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
          disabled={disabled}
        >
          <CalendarBlankIcon size={16} />
        </button>
        {isOpen && typeof document !== "undefined"
          ? createPortal(
                <div
                  ref={popoverRef}
                className="fixed z-50 rounded-xl border border-slate-200 bg-white p-3 shadow-xl ring-1 ring-slate-900/5"
                style={{
                  top: `${popoverStyle.top}px`,
                  left: `${popoverStyle.left}px`,
                  width: `${popoverStyle.width}px`,
                }}
              >
                <div className="flex items-center justify-between px-1 pb-2">
                  <button
                    type="button"
                    onClick={() =>
                      setViewDate(
                        new Date(
                          viewDate.getFullYear(),
                          viewDate.getMonth() - 1,
                          1
                        )
                      )
                    }
                    className="rounded-md p-1 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
                    aria-label="Previous month"
                  >
                    <CaretLeftIcon size={16} />
                  </button>
                  <div className="text-sm font-medium text-slate-700">
                    {MONTH_NAMES[viewDate.getMonth()]} {viewDate.getFullYear()}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setViewDate(
                        new Date(
                          viewDate.getFullYear(),
                          viewDate.getMonth() + 1,
                          1
                        )
                      )
                    }
                    className="rounded-md p-1 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
                    aria-label="Next month"
                  >
                    <CaretRightIcon size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-xs text-slate-500">
                  {WEEKDAYS.map((weekday) => (
                    <div key={weekday} className="text-center font-medium">
                      {weekday}
                    </div>
                  ))}
                </div>
                <div className="mt-1 grid grid-cols-7 gap-1 text-sm">
                  {Array.from({ length: startOffset }).map((_, index) => (
                    <div key={`empty-${index}`} className="h-9" />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, index) => {
                    const day = index + 1;
                    const date = new Date(
                      viewDate.getFullYear(),
                      viewDate.getMonth(),
                      day
                    );
                    const isSelected = parsedDisplayDate
                      ? isSameDay(parsedDisplayDate, date)
                      : false;
                    const isToday = isSameDay(new Date(), date);
                    const isDisabled = isDateDisabled(date);

                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => handleSelectDate(date)}
                        disabled={isDisabled}
                        className={`h-9 rounded-lg text-sm transition-colors ${
                          isSelected
                            ? "bg-blue-600 text-white"
                            : "text-slate-700 hover:bg-slate-100"
                        } ${
                          isToday && !isSelected
                            ? "border border-blue-200"
                            : "border border-transparent"
                        } ${
                          isDisabled
                            ? "cursor-not-allowed text-slate-300 hover:bg-transparent"
                            : ""
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>,
              document.body
            )
          : null}
      </div>
    </div>
  );
}
