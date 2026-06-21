import { Search, X } from "lucide-react";
import { useState } from "react";

const rentalRecords = [
  {
    status: "ACTIVE",
    assetId: "AST-OC-001",
    device: "Oxygen Concentrator 10L",
    patient: "Rahul Sharma",
    phone: "9876543210",
    date: "01-Oct-2023",
    days: "30 (Due)",
  },
  {
    status: "ACTIVE",
    assetId: "AST-BD-042",
    device: "ICU Motorized Bed",
    patient: "Anita Desai",
    phone: "9123456780",
    date: "15-Oct-2023",
    days: "16",
  },
  {
    status: "ACTIVE",
    assetId: "AST-BP-018",
    device: "BiPAP Machine ST",
    patient: "Mohan Verma",
    phone: "9988776655",
    date: "22-Oct-2023",
    days: "9 (Due)",
  },
  {
    status: "ACTIVE",
    assetId: "AST-OC-005",
    device: "Oxygen Concentrator 5L",
    patient: "Sunita Rao",
    phone: "9876501234",
    date: "28-Oct-2023",
    days: "3",
  },
  {
    status: "INACTIVE",
    assetId: "AST-WC-007",
    device: "Electric Wheelchair",
    patient: "Imran Khan",
    phone: "9090909090",
    date: "05-Sep-2023",
    days: "62",
  },
  {
    status: "CLOSED",
    assetId: "AST-BD-021",
    device: "Fowler Bed",
    patient: "Priya Nair",
    phone: "8989898989",
    date: "12-Aug-2023",
    days: "45",
  },
  {
    status: "CLOSED",
    assetId: "AST-BP-009",
    device: "CPAP Auto",
    patient: "Vikram Singh",
    phone: "7777788888",
    date: "01-Jul-2023",
    days: "30",
  },
];

export default function Rent() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [device, setDevice] = useState("All");

  const filteredRecords = rentalRecords.filter((item) => {
    const matchSearch =
      item.patient.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.includes(search) ||
      item.assetId.toLowerCase().includes(search.toLowerCase()) ||
      item.device.toLowerCase().includes(search.toLowerCase());

    const matchStatus = status === "All" || item.status === status;

    const matchDevice =
      device === "All" || item.device.toLowerCase().includes(device.toLowerCase());

    return matchSearch && matchStatus && matchDevice;
  });

  const resetFilters = () => {
    setSearch("");
    setStatus("All");
    setDevice("All");
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-3xl font-black text-slate-900">
          Rental Master Sheet
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Live view of all requisitions.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex gap-3">
        <div className="flex-1 flex items-center gap-3 border-2 border-[#0f8b8d] rounded-lg px-4">
          <Search size={18} className="text-slate-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Patient Name, Phone, Asset ID, or Care Center..."
            className="h-12 outline-none flex-1 text-sm text-slate-600"
          />

          {search && (
            <button onClick={() => setSearch("")}>
            <X size={17} className="text-slate-400" />
            </button>
          )}
        </div>

        <select value={status} onChange={(e) => setStatus(e.target.value)} className="border border-slate-300 rounded-lg px-4 text-sm font-bold text-slate-700">
          <option value="All">Status: All</option>
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
          <option value="CLOSED">Closed</option>
        </select>

        <select value={device} onChange={(e) => setDevice(e.target.value)}  className="border border-slate-300 rounded-lg px-4 text-sm font-bold text-slate-700">
          <option value="All">All Devices</option>
          <option value="Oxygen Concentrator">Oxygen Concentrator</option>
          <option value="BiPAP">BiPAP Machine</option>
          <option value="Bed">Bed</option>
          <option value="Wheelchair">Wheelchair</option>
          <option value="CPAP">CPAP</option>
        </select>

        <button onClick={resetFilters} className="border border-slate-300 rounded-lg px-5 text-sm font-bold text-slate-600 hover:bg-slate-50" >
          Reset
        </button>
      </div>

      <p className="text-sm text-slate-400">
        {filteredRecords.length} records shown
      </p>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500 uppercase tracking-widest text-xs">
            <tr>
              <th className="text-left p-5">Status</th>
              <th className="text-left p-5">Asset ID</th>
              <th className="text-left p-5">Device Name</th>
              <th className="text-left p-5">Patient Name</th>
              <th className="text-left p-5">Log In Date</th>
              <th className="text-left p-5">Total Days</th>
              <th className="text-left p-5">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredRecords.map((item) => (
              <tr key={item.assetId} className="border-t hover:bg-slate-50">
                <td className="p-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-black border ${
                      item.status === "ACTIVE"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : item.status === "INACTIVE"
                        ? "bg-amber-50 text-amber-700 border-amber-200"
                        : "bg-slate-100 text-slate-600 border-slate-200"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-5 font-mono text-slate-500">
                  {item.assetId}
                </td>
                <td className="p-5 text-[#006d77] font-bold">
                  {item.device}
                </td>
                <td className="p-5 font-black text-slate-800">
                  {item.patient}
                </td>
                <td className="p-5 text-slate-700">{item.date}</td>

                <td className={`p-5 font-black ${item.days.includes("Due") ? "text-amber-600" : "text-slate-800"}`}>
                  {item.days}
                </td>

                <td className="p-5">
                  <button onClick={() => alert(`Managing ${item.assetId}`)} className="bg-[#0d5269] text-white px-4 py-2 rounded-md font-bold" >
                    Manage
                  </button>
                </td>
              </tr>
            ))}

            {filteredRecords.length === 0 && (
              <tr>
                <td colSpan="7" className="p-8 text-center text-slate-400">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}