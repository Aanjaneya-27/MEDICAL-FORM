export default function StatCard({ title, value, sub }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">{title}</p>
      <h3 className="text-3xl font-black text-slate-900 mt-2">{value}</h3>
      <p className="text-xs text-slate-400 mt-2">{sub}</p>
    </div>
  );
}