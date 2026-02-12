import * as React from "react";
import clsx from "clsx";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = React.forwardRef<
  HTMLButtonElement,
  IconButtonProps
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(
        "flex h-10 w-10 items-center justify-center rounded-lg border-slate-300",
        "transition-all duration-200",
        "hover:bg-slate-100 active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
      {...props}
    />
  );
});

IconButton.displayName = "IconButton";