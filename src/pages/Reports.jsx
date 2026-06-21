import { useState } from "react";
import { Search, X, Download } from "lucide-react";

const reportData = [
  {
    id: "TXN-1001",
    patient: "Rahul Sharma",
    assetId: "AST-OC-001",
    device: "Oxygen Concentrator 10L",
    type: "Rental Payment",
    amount: "₹4000",
    status: "Paid",
    date: "01-Nov-2023",
  },
  {
    id: "TXN-1002",
    patient: "Mohan Verma",
    assetId: "AST-BP-018",
    device: "BiPAP Machine ST",
    type: "Rental Payment",
    amount: "₹7000",
    status: "Due",
    date: "03-Nov-2023",
  },
  {
    id: "TXN-1003",
    patient: "Anita Desai",
    assetId: "AST-BD-042",
    device: "ICU Motorized Bed",
    type: "Maintenance",
    amount: "₹1200",
    status: "Pending",
    date: "05-Nov-2023",
  },
  {
    id: "TXN-1004",
    patient: "Sunita Rao",
    assetId: "AST-OC-005",
    device: "Oxygen Concentrator 5L",
    type: "Rental Payment",
    amount: "₹3500",
    status: "Paid",
    date: "06-Nov-2023",
  },
  {
    id: "TXN-1005",
    patient: "Imran Khan",
    assetId: "AST-WC-007",
    device: "Electric Wheelchair",
    type: "Refund",
    amount: "₹8000",
    status: "Completed",
    date: "07-Nov-2023",
  },
];

export default function Reports() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [type, setType] = useState("All");

  const filtered = reportData.filter((item) => {
    const matchSearch =
      item.patient.toLowerCase().includes(search.toLowerCase()) ||
      item.assetId.toLowerCase().includes(search.toLowerCase()) ||
      item.device.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase());

    const matchStatus = status === "All" || item.status === status;
    const matchType = type === "All" || item.type === type;

    return matchSearch && matchStatus && matchType; });
    const resetFilters = () => {setSearch("");
    setStatus("All");
    setType("All");
  };

  return (
    <div className="space-y-5">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900">
            Reports & Ledger
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Track payments, rent ledger and asset movement records.
          </p>
        </div>

        <button
          onClick={() => alert("Report downloaded successfully")}
          className="bg-[#008b83] text-white px-5 py-3 rounded-lg text-sm font-bold flex items-center gap-2"
        >
          <Download size={17} />
          Export
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex gap-3">
        <div className="flex-1 flex items-center gap-3 border-2 border-[#0f8b8d] rounded-lg px-4">
          <Search size={18} className="text-slate-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Transaction, Patient, Asset ID..."
            className="h-12 outline-none flex-1 text-sm text-slate-600"
          />

          {search && (
            <button onClick={() => setSearch("")}>
              <X size={17} className="text-slate-400" />
            </button>
          )}
        </div>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-slate-300 rounded-lg px-4 text-sm font-bold text-slate-700"
        >
          <option value="All">Status: All</option>
          <option value="Paid">Paid</option>
          <option value="Due">Due</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border border-slate-300 rounded-lg px-4 text-sm font-bold text-slate-700"
        >
          <option value="All">All Types</option>
          <option value="Rental Payment">Rental Payment</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Refund">Refund</option>
        </select>

        <button
          onClick={resetFilters}
          className="border border-slate-300 rounded-lg px-5 text-sm font-bold text-slate-600 hover:bg-slate-50"
        >
          Reset
        </button>
      </div>

      <p className="text-sm text-slate-400">
        {filtered.length} ledger records shown
      </p>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500 uppercase tracking-widest text-xs">
            <tr>
              <th className="text-left p-5">Txn ID</th>
              <th className="text-left p-5">Patient</th>
              <th className="text-left p-5">Asset</th>
              <th className="text-left p-5">Type</th>
              <th className="text-left p-5">Amount</th>
              <th className="text-left p-5">Status</th>
              <th className="text-left p-5">Date</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="border-t hover:bg-slate-50">
                <td className="p-5 font-mono text-slate-500">{item.id}</td>

                <td className="p-5 font-black text-slate-800">
                  {item.patient}
                </td>

                <td className="p-5">
                  <p className="font-mono text-[#006d77]">{item.assetId}</p>
                  <p className="text-xs text-slate-400">{item.device}</p>
                </td>

                <td className="p-5 text-slate-700">{item.type}</td>

                <td className="p-5 font-black text-slate-900">
                  {item.amount}
                </td>

                <td className="p-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-black border ${
                      item.status === "Paid" || item.status === "Completed"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : item.status === "Due"
                        ? "bg-amber-50 text-amber-700 border-amber-200"
                        : "bg-rose-50 text-rose-700 border-rose-200"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-5 text-slate-600">{item.date}</td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan="7" className="p-8 text-center text-slate-400">
                  No ledger records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}