// --- 2. INPUT (POLJE ZA UNOS) ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, error, icon, className = '', ...props }) => {
  return (
    <div className={`space-y-1.5 w-full ${className}`}>
      {label && (
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={`
            w-full bg-slate-50 border rounded-lg text-sm text-slate-900 
            focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all
            placeholder:text-slate-400
            ${icon ? 'pl-10 pr-4' : 'px-3'} 
            ${props.disabled ? 'opacity-60 cursor-not-allowed' : ''}
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-slate-200'}
            py-2.5
          `}
          {...props}
        />
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            {icon}
          </div>
        )}
      </div>
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
};
