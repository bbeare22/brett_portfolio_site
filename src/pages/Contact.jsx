import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    setStatus("Thanks! Your message was noted.");
    e.currentTarget.reset();
  }
  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-3 text-neutral-300">
        Want to collaborate or chat about an opportunity? Send a quick note —
        I’ll get back soon.
      </p>
      <form onSubmit={onSubmit} className="mt-6 card p-6 space-y-4">
        <div>
          <label className="text-sm text-neutral-300">Name</label>
          <input
            required
            className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div>
          <label className="text-sm text-neutral-300">Email</label>
          <input
            required
            type="email"
            className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div>
          <label className="text-sm text-neutral-300">Message</label>
          <textarea
            required
            rows="4"
            className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <button className="rounded-xl bg-gradient-to-r from-brand-500 to-fuchsia-500 px-4 py-2 font-semibold">
          Send
        </button>
        {status && <p className="text-emerald-300 text-sm">{status}</p>}
      </form>
    </div>
  );
}
