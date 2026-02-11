import { Button } from "../button";
import { ArrowLeftIcon } from "@phosphor-icons/react/ArrowLeft";

// --- 6. PAGE HEADER (ZAGLAVLJE STRANICE) ---
export interface PageHeaderProps {
  title: string;
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, actions }) => {
  return (
    <header className="bg-white h-12 flex items-center border-b border-slate-200 fixed top-16 left-0 right-0 sm:left-(--sidebar-offset,240px) z-40 px-5 py-1 shadow-sm transition-[left] duration-300 ease-in-out">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div>
            <h1 className="text-lg font-bold text-slate-800 leading-tight">{title}</h1>
          </div>
        </div>
        {actions && <div className="flex items-center gap-3">{actions}</div>}
      </div>
    </header>
  );
};