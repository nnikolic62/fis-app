export default function FilterFormLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-1 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
      {children}
    </div>
  );
}