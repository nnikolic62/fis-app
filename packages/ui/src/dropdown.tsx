// --- 3. SELECT (PADAJUĆI MENI) ---
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: string[];
  error?: string;
}

export const Select: React.FC<SelectProps> = ({ label, options, error, className = '', ...props }) => {
  return (
    <div className={`space-y-1.5 w-full ${className}`}>
      {label && (
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={`
            w-full px-3 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 appearance-none 
            focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all
            ${error ? 'border-red-500' : 'border-slate-200'}
          `}
          {...props}
        >
          {options.map((opt, idx) => (
            <option key={idx} value={opt}>{opt}</option>
          ))}
        </select>
        {/* <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" /> */}
      </div>
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
};