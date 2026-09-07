"use client";

import { FormEvent, useState } from "react";

export function AcquireRequest({ objectName, archive }: { objectName: string; archive: string }) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "").trim();
    const name = String(form.get("name") || "").trim();
    const recipient = process.env.NEXT_PUBLIC_ACQUIRE_EMAIL;

    if (recipient) {
      const subject = encodeURIComponent(`GARANG acquisition request — ${objectName}`);
      const body = encodeURIComponent(
        `Object: ${objectName}\nArchive: ${archive}\nName: ${name}\nEmail: ${email}\n\nI would like to request acquisition details.`
      );
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
      return;
    }

    setSent(true);
  }

  if (sent) {
    return (
      <div className="acquire-note" role="status">
        <p className="eyebrow">Private acquisition</p>
        <p className="serif acquire-note__title">Requests will open with the first production edition.</p>
        <p>Your interest has been noted locally for this session. A direct acquisition email can be connected later through the site configuration.</p>
      </div>
    );
  }

  return (
    <form className="acquire-form" onSubmit={submit}>
      <label>
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <button className="acquire-button" type="submit">Request acquisition</button>
      <p className="acquire-form__micro">No checkout urgency. Acquisition details are shared privately.</p>
    </form>
  );
}
