import { NavLink, useNavigate } from "react-router-dom";
import { ClipboardList,Package,BarChart3,FilePlus2,Bell, LogOut,} from "lucide-react";
import { useState } from "react";
import NotificationX from "./NotificationX";

const links = [
  { to: "/rental-master", label: "Rental Master", icon: ClipboardList },
  { to: "/requisition", label: "Log New Requisition", icon: FilePlus2 },
  { to: "/inventory", label: "Inventory & Assets", icon: Package },
  { to: "/reports", label: "Reports & Ledger", icon: BarChart3 },
];

export default function Sidebar() {
  const [openNotifications, setOpenNotifications] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-72 bg-[#073b4c] text-white flex flex-col justify-between">
        <div>
          <div className="h-20 bg-[#006d77] flex items-center px-6 border-b border-white/10">
            <div className="w-11 h-11 rounded-xl bg-[#2ec4b6] flex items-center justify-center mr-3">
              <svg viewBox="0 0 100 100" className="w-8 h-8">
                <path
                  d="M25 50 H40 L47 36 L55 65 L62 50 H75"
                  fill="none"
                  stroke="#073b4c"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div>
              <h1 className="font-black tracking-wider text-lg">
                CHIKITSA OS
              </h1>
              <p className="text-xs text-cyan-100">
                Enterprise Asset Management
              </p>
            </div>
          </div>

          <nav className="p-5 space-y-2">
            <p className="text-[11px] uppercase tracking-widest text-slate-400 font-bold px-3 mb-3">
              Workspace
            </p>

            {links.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition ${
                      isActive
                        ? "bg-[#006d77] text-white shadow-lg"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`
                  }
                >
                  <Icon size={18} />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          <div className="px-5 mt-6">
            <p className="text-[11px] uppercase tracking-widest text-slate-400 font-bold px-3 mb-3">
              Alerts
            </p>

            <button
              onClick={() => setOpenNotifications(true)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <div className="flex items-center gap-3">
                <Bell size={18} />
                <span>Notification Center</span>
              </div>

              <span className="bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>

        <div className="p-5 border-t border-white/10 bg-[#0b3d56]">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center justify-between"
          >
            <div className="text-left">
              <p className="text-sm font-bold">Admin User</p>
              <p className="text-xs text-slate-400">Operations Head</p>
            </div>

            <LogOut size={18} className="text-red-300" />
          </button>
        </div>
      </aside>

      <NotificationX
        open={openNotifications}
        onClose={() => setOpenNotifications(false)}
      />
    </>
  );
}