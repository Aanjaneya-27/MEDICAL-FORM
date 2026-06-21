export default function Requisition() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900">
          Log Asset Requisition
        </h1>
        <p className="text-sm text-slate-500">
          Deploy a specific medical asset from inventory to patient.
        </p>
      </div>

      <form className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-slate-100 px-6 py-4 border-b border-slate-200">
          <h3 className="text-sm font-black text-slate-700">
            Asset Allocation & Logistics
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-5 p-6">
          <Field label="Device Model *" type="select" />
          <Field label="Specific Asset ID *" type="select" />
          <Field label="Patient Name *" />
          <Field label="Mobile Number *" />
          <Field label="Delivery Address *" wide />
          <Field label="Start Date *" type="date" />
          <Field label="Monthly Rent" />
        </div>

        <div className="p-5 bg-slate-50 border-t flex justify-end gap-3">
          <button type="button" className="px-5 py-2 border rounded-xl text-sm font-bold">
            Cancel
          </button>
          <button onClick={() => alert("Saved Successfully")}className="bg-[#008b83] text-white px-5 py-3 rounded-lg">
           Save
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, type = "text", wide }) {
  return (
    <div className={wide ? "col-span-2" : ""}>
      <label className="block text-xs font-black text-slate-500 mb-1">
        {label}
      </label>

      {type === "select" ? (
        <select className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm">
          <option>Oxygen Concentrator 10L</option>
          <option>BiPAP Machine</option>
          <option>Ventilator</option>
        </select>
      ) : (
        <input
          type={type}
          className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm"
        />
      )}
    </div>
  );
}