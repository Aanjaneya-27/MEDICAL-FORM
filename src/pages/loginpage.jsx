import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#faf9f5] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="bg-[#006d77] p-8 text-center text-white">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-[#2ec4b6] flex items-center justify-center mb-4">
            <svg viewBox="0 0 100 100" className="w-11 h-11">
              <path
                d="M25 50 H40 L47 36 L55 65 L62 50 H75"
                fill="none"
                stroke="#073b4c"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-black">CHIKITSA OS</h1>
          <p className="text-sm text-cyan-100 mt-1">
            Enterprise Asset Management
          </p>
        </div>
        <div className="p-8">
          <label className="text-xs font-bold text-slate-500">Email</label>
          <input
            className="w-full border border-slate-300 rounded-xl px-4 py-3 mt-1 mb-4"
            placeholder="admin@chikitsa.com"
          />
          <label className="text-xs font-bold text-slate-500">Password</label>
          <input
            className="w-full border border-slate-300 rounded-xl px-4 py-3 mt-1 mb-6"
            placeholder="••••••••"
            type="password"
          />
          <button onClick={() => navigate("/rental-master")}className="w-full bg-[#006d77] text-white py-3 rounded-xl font-black">Login</button>
        </div>
      </div>
    </div>
  );
}