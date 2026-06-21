import { notifications } from "../data/Data";

export default function NotificationPanel() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
      <h3 className="font-black text-slate-900 mb-4">
        Notification Center
      </h3>

      <div className="space-y-3">
        {notifications.map((item) => (
          <div
            key={item}
            className="bg-amber-50 border border-amber-100 text-amber-800 rounded-xl p-3 text-sm font-semibold"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}