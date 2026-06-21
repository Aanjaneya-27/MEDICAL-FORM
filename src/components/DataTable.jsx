import { rentals } from "../data/Data";

export default function DataTable() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      <div className="p-5 border-b border-slate-200 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-black text-slate-900">
            Active Rental Records
          </h3>
          <p className="text-sm text-slate-500">
            Track patients, devices, payment and rental status.
          </p>
        </div>

        <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm font-bold">
          <option>All Status</option>
          <option>On Rent</option>
          <option>Payment Due</option>
          <option>Service</option>
        </select>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-slate-100 text-slate-600">
          <tr>
            <th className="text-left p-4">Asset ID</th>
            <th className="text-left p-4">Patient</th>
            <th className="text-left p-4">Device</th>
            <th className="text-left p-4">Phone</th>
            <th className="text-left p-4">Rent</th>
            <th className="text-left p-4">Payment</th>
            <th className="text-right p-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {rentals.map((item) => (
            <tr key={item.assetId} className="border-t border-slate-100 hover:bg-slate-50">
              <td className="p-4 font-mono font-black text-[#006d77]">
                {item.assetId}
              </td>
              <td className="p-4 font-bold">{item.patient}</td>
              <td className="p-4 text-slate-600">{item.device}</td>
              <td className="p-4 text-slate-500">{item.phone}</td>
              <td className="p-4 font-bold">{item.rent}</td>
              <td className="p-4">
                <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">
                  {item.payment}
                </span>
              </td>
              <td className="p-4 text-right">
                <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}