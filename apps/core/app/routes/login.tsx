import { useState } from "react";
import { ArrowRightIcon, EnvelopeSimpleIcon, LockIcon, ShieldCheckIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router";
import { useLogin } from "~/auth/auth.query";
import { setTokenProvider } from "@repo/api-client";

const LoginInput = ({ label, placeholder, type = "text", icon, value, onChange }: { label: string; placeholder: string; type?: string; icon: React.ReactNode; value: string; onChange: (val: string) => void }) => (
  <div className="space-y-1.5">
    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{label}</label>
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400"
      />
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
        {icon}
      </div>
    </div>
  </div>
);

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = useLogin({
    onSuccess: (response) => {
      localStorage.setItem('token', response.access_token);
      navigate("/kadrovi");
    },
  });

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    login.mutate({ username, password });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">

      {/* GLAVNI KONTEJNER (CARD) */}
      <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 min-h-[600px]">

        {/* LEVA STRANA - BRENDING */}
        <div className="bg-blue-600 p-12 flex flex-col justify-between text-white relative overflow-hidden">
          {/* Dekorativni elementi u pozadini */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-600 rounded-full blur-3xl opacity-40"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 shadow-inner">
                <ShieldCheckIcon size={28} className="text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">HR Sistem</span>
            </div>

            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Upravljajte svojim <br /> kadrovima pametno.
            </h2>
            <p className="text-blue-100 text-base leading-relaxed max-w-md">
              Centralizovana platforma za matičnu evidenciju, rešenja, obrazovanje i sistematizaciju radnih mesta. Sigurno, brzo i pouzdano.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-4 text-xs text-blue-200 font-medium">
            <span>v2.4.0</span>
            <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
            <span>&copy; 2024 Vaša Kompanija</span>
          </div>
        </div>

        {/* DESNA STRANA - LOGIN FORMA */}
        <div className="p-12 flex flex-col justify-center bg-white">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-800">Prijava na sistem</h3>
            <p className="text-slate-500 text-sm mt-2">Dobrodošli nazad! Unesite svoje podatke za pristup.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <LoginInput
              label="Korisničko Ime"
              placeholder="username"
              type="text"
              icon={<EnvelopeSimpleIcon size={18} />}
              value={username}
              onChange={setUsername}
            />

            <LoginInput
              label="Lozinka"
              placeholder="••••••••"
              type="password"
              icon={<LockIcon size={18} />}
              value={password}
              onChange={setPassword}
            />

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center">
                  <input type="checkbox" className="peer w-4 h-4 border-slate-300 rounded text-blue-600 focus:ring-blue-500 cursor-pointer" />
                </div>
                <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">Zapamti me</span>
              </label>
              <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors">
                Zaboravljena lozinka?
              </a>
            </div>

            <button
              type="submit"
              disabled={login.isPending}
              className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 flex items-center justify-center gap-2 group active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
            >
              {login.isPending ? "Prijavljivanje..." : "Prijavi se"}
              {!login.isPending && <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />}
            </button>

            {login.isError && (
              <p className="text-sm text-red-600 text-center">
                {login.error?.message || "Greška pri prijavi. Pokušajte ponovo."}
              </p>
            )}
          </form>

          <div className="mt-10 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-400">
              Problem sa prijavom? Kontaktirajte <a href="#" className="text-slate-600 font-semibold hover:underline">IT podršku</a>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
