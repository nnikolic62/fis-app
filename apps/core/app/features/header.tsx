
// Dummy data
const user = {
  name: "Marko Marković",
  role: "Administrator",
  initials: "MM",
};

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-2 bg-white border-b border-slate-200">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blue-600 text-white text-xs font-bold">
          HR
        </div>
        <span className="text-lg font-semibold text-slate-800 tracking-tight">
          Kadrovska
        </span>
      </div>
      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-slate-800 leading-tight">
              {user.name}
            </p>
            <p className="text-xs text-slate-500">{user.role}</p>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-semibold">
            {user.initials}
          </div>
        </div>
      </div>
    </header>
  );
}
