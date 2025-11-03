import React, { useEffect } from "react";

export default function Toast({
  id,
  type = "success",
  message,
  onClose,
  ttl = 3500,
}) {
  useEffect(() => {
    const t = setTimeout(() => onClose(id), ttl);
    return () => clearTimeout(t);
  }, [id, onClose, ttl]);

  const base =
    "pointer-events-auto w-full sm:w-80 rounded-xl border px-4 py-3 shadow-xl backdrop-blur";
  const styles =
    type === "success"
      ? "bg-emerald-900/30 border-emerald-400/30 text-emerald-100"
      : "bg-rose-900/30 border-rose-400/30 text-rose-100";

  return (
    <div
      className={`${base} ${styles} transition-all duration-300 animate-[toastIn_.35s_ease]`}
      role="status"
      aria-live="polite"
    >
      <div className="text-sm">{message}</div>
    </div>
  );
}
