"use client";

import React from 'react';
// import { ChevronDown, Loader2 } from 'lucide-react';
 
// --- TIPOVI ---
type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';
 
// --- 1. BUTTON (DUGME) ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  icon?: React.ReactNode;
}
 
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading,
  icon,
  className = '',
  ...rest
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed";
 
  const variants = {
    primary: "bg-brand-500 text-white hover:bg-brand-700 focus:ring-brand-500 shadow-sm cursor-pointer border border-slate-200 focus:border-blue-500 focus:ring-blue-200",
    secondary: "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 focus:ring-slate-200 shadow-sm cursor-pointer",
    outline: "bg-transparent text-brand-600 border border-brand-600 hover:bg-brand-50 focus:ring-brand-500 cursor-pointer",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm cursor-pointer",
  };
 
  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-2 py-1.5 text-sm",
    lg: "px-5 py-3 text-base",
  };
 
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || rest.disabled}
      {...rest}
    >
      {/* {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />} */}
      {!isLoading && icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
