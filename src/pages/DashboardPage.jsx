import {stats} from "../data/Data";
import StatCard from "../components/StateCard";
import DataTable from "../components/DataTable";
import Notification from "../components/Notification"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Dashboard</h1>
          <p className="text-sm text-slate-500">
            Overview of active rentals, inventory and alerts.
          </p>
        </div>

        <button className="bg-[#006d77] text-white px-5 py-2 rounded-xl text-sm font-bold">
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {stats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <DataTable />
        </div>
        <Notification />
      </div>
    </div>
  );
}