// --- 6. PAGE HEADER (ZAGLAVLJE STRANICE) ---
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  backAction?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, actions, backAction }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          {backAction && (
            <button onClick={backAction} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
          )}
          <div>
            <h1 className="text-xl font-bold text-slate-800">{title}</h1>
            {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
          </div>
        </div>
        {actions && <div className="flex items-center gap-3">{actions}</div>}
      </div>
    </header>
  );
};