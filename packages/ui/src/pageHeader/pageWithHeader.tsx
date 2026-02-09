import type { ReactNode } from "react";

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
  return (
    <div className={`min-h-screen pb-20 pt-16 ${className}`}>
      <PageHeader {...headerProps} />
      <main className={`max-w-7xl mx-auto pt-3 lg:pt-5 ${contentClassName}`}>
        {children}
      </main>
    </div>
  );
}
