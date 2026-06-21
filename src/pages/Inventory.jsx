import { useState } from "react";
import { Search, X } from "lucide-react";

const inventoryData = [
  {
    assetId: "AST-OC-001",
    device: "Oxygen Concentrator 10L",
    condition: "Good",
    status: "Available",
  },
  {
    assetId: "AST-BP-018",
    device: "BiPAP Machine ST",
    condition: "Excellent",
    status: "On Rent",
  },
  {
    assetId: "AST-WC-007",
    device: "Electric Wheelchair",
    condition: "Needs Service",
    status: "Maintenance",
  },
];

export default function Inventory() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = inventoryData.filter((item) => {
    const searchMatch =
      item.assetId.toLowerCase().includes(search.toLowerCase()) ||
      item.device.toLowerCase().includes(search.toLowerCase());

    const statusMatch =
      status === "All" || item.status === status;

    return searchMatch && statusMatch;
  });

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-3xl font-black text-slate-900">
          Inventory & Assets
        </h1>

        <p className="text-sm text-slate-500">
          Track all medical equipment inventory.
        </p>
      </div>

      <div className="bg-white border rounded-xl p-4 flex gap-3">
        <div className="flex-1 flex items-center gap-3 border-2 border-[#0f8b8d] rounded-lg px-4">
          <Search size={18} />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Asset ID or Device..."
            className="h-12 flex-1 outline-none"
          />

          {search && (
            <button onClick={() => setSearch("")}>
              <X size={18} />
            </button>
          )}
        </div>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-lg px-4"
        >
          <option value="All">All Status</option>
          <option value="Available">Available</option>
          <option value="On Rent">On Rent</option>
          <option value="Maintenance">Maintenance</option>
        </select>

        <button
          onClick={() => {
            setSearch("");
            setStatus("All");
          }}
          className="border rounded-lg px-5 font-bold"
        >
          Reset
        </button>
      </div>

      <p className="text-sm text-slate-400">
        {filtered.length} assets shown
      </p>

      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-4 text-left">Asset ID</th>
              <th className="p-4 text-left">Device</th>
              <th className="p-4 text-left">Condition</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item) => (
              <tr key={item.assetId} className="border-t">
                <td className="p-4">{item.assetId}</td>
                <td className="p-4">{item.device}</td>
                <td className="p-4">{item.condition}</td>
                <td className="p-4">{item.status}</td>
                <td className="p-4">
                  <button className="bg-[#0d5269] text-white px-4 py-2 rounded-md">
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}