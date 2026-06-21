export default function NotificationX({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30" onClick={onClose}/>
      <div className="absolute right-0 top-0 h-screen w-80 bg-white shadow-2xl">
        <div className="p-5 border-b flex justify-between">
          <h2 className="font-bold">Notifications</h2>
          <button onClick={onClose}>X</button>
        </div>
        <div className="p-5 space-y-3">
          <div className="p-3 bg-amber-50 rounded-lg">
            3 rentals expiring within 48 hours
          </div>
          <div className="p-3 bg-amber-50 rounded-lg">
            Payment pending
          </div>
          <div className="p-3 bg-amber-50 rounded-lg">
            Service ticket open
          </div>
        </div>
      </div>
    </div>
  );
}