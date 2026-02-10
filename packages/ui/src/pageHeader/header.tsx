import { Button } from "../button";
import { ArrowLeftIcon } from "@phosphor-icons/react/ArrowLeft";

// --- 6. PAGE HEADER (ZAGLAVLJE STRANICE) ---
export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  backAction?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, actions, backAction }) => {
  return (
    <header className="bg-white border-b border-slate-200 fixed top-16 left-0 right-0 sm:left-(--sidebar-offset) z-40 px-5 py-1 shadow-sm">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          {backAction && (
            <Button onClick={backAction} variant="ghost" className="p-1 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
              <ArrowLeftIcon size={20} />
            </Button>
          )}
          <div>
            <h1 className="text-lg font-bold text-slate-800 leading-tight">{title}</h1>
            {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
          </div>
        </div>
        {actions && <div className="flex items-center gap-3">{actions}</div>}
      </div>
    </header>
  );
};