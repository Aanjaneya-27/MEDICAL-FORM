import { Bell, Plus, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NotificationX from "./NotificationX.jsx";

export default function Navbar() {
  const [openNotifications, setOpenNotifications] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between">
       <button onClick={() => setOpenNotifications(true)} className="flex items-center gap-2 border border-amber-200 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-bold hover:bg-amber-100 cursor-pointer">
        <AlertTriangle size={16} />
         3 Rentals expiring in 48 hours
         </button>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpenNotifications(true)}
            className="relative w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-50" >
            <Bell size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
              3
            </span>
          </button>

          <button
            onClick={() => navigate("/requisition")}
            className="bg-[#008b83] text-white px-6 py-3 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-[#00756f]"
          >
            <Plus size={18} />
            Add Record
          </button>
        </div>
      </header>

      <NotificationX
        open={openNotifications}
        onClose={() => setOpenNotifications(false)}
      />
    </>
  );
}