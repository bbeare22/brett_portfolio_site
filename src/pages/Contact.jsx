import React, { useState } from "react";
import Toast from "../components/Toast.jsx";

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [toasts, setToasts] = useState([]);

  function pushToast({ type = "success", message }) {
    const id = crypto.randomUUID();
    setToasts((t) => [...t, { id, type, message }]);
  }
  function dismissToast(id) {
    setToasts((t) => t.filter((x) => x.id !== id));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "submitting", message: "" });

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const res = await fetch("https://formspree.io/f/meopdoqr", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        form.reset();
        setStatus({ state: "success", message: "" });
        pushToast({
          type: "success",
          message: "Message sent. I’ll reply soon—thanks!",
        });
      } else {
        setStatus({ state: "error", message: "" });
        pushToast({
          type: "error",
          message:
            "Hmm, something went wrong. Please try again or email beare.logan@yahoo.com.",
        });
      }
    } catch {
      setStatus({ state: "error", message: "" });
      pushToast({
        type: "error",
        message:
          "Network error. Please try again or email beare.logan@yahoo.com.",
      });
    }
  }

  const isSubmitting = status.state === "submitting";

  return (
    <div className="mx-auto max-w-xl relative">
      {/* Toast stack (fixed, top-right) */}
      <div className="pointer-events-none fixed top-4 right-4 z-[60] flex flex-col gap-3">
        {toasts.map((t) => (
          <Toast key={t.id} {...t} onClose={dismissToast} />
        ))}
      </div>

      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-3 text-neutral-300">
        Want to collaborate or chat about an opportunity? Send a quick note —
        I’ll get back to you soon.
      </p>

      <form onSubmit={onSubmit} className="mt-6 card p-6 space-y-4">
        {/* Subject + honeypot */}
        <input
          type="hidden"
          name="_subject"
          value="New message from brett.dev portfolio"
        />
        <input
          type="text"
          name="_gotcha"
          tabIndex="-1"
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div>
          <label className="text-sm text-neutral-300">Name</label>
          <input
            required
            name="name"
            className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>

        <div>
          <label className="text-sm text-neutral-300">Email</label>
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>

        <div>
          <label className="text-sm text-neutral-300">Message</label>
          <textarea
            required
            name="message"
            rows="4"
            className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>

        <button
          disabled={isSubmitting}
          className="rounded-xl bg-gradient-to-r from-brand-500 to-fuchsia-500 px-4 py-2 font-semibold disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Send"}
        </button>
      </form>

      <div className="mt-6 text-sm text-neutral-300">
        Prefer email or phone?{" "}
        <a
          className="text-brand-300 hover:text-brand-200"
          href="mailto:beare.logan@yahoo.com"
        >
          beare.logan@yahoo.com
        </a>{" "}
        • <span>(937) 336-3440</span>
      </div>
    </div>
  );
}
