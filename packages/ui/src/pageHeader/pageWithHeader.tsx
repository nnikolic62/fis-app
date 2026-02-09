"use client";

import type { ReactNode } from "react";
import { useNavigate } from "react-router";

import { PageHeader, type PageHeaderProps } from "./header";

export type PageWithHeaderProps = PageHeaderProps & {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function PageWithHeader({
  children,
  className = "",
  contentClassName = "",
  ...headerProps
}: PageWithHeaderProps) {
  const navigate = useNavigate();
  const backAction = headerProps.backAction ?? (() => navigate(-1));

  return (
    <div className={`min-h-screen pb-20 pt-16 ${className}`}>
      <PageHeader {...headerProps} backAction={backAction} />
      <main className={`max-w-7xl mx-auto pt-3 lg:pt-5 ${contentClassName}`}>
        {children}
      </main>
    </div>
  );
}
