"use client";

import { useState } from "react";
import { MailIcon } from "./Icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy(e: React.MouseEvent) {
    // Let modifier-clicks and middle-clicks open the mail client normally.
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <a
      href={`mailto:${email}`}
      onClick={copy}
      title="Click to copy"
      className="group inline-flex items-center gap-1.5 text-ink hover:text-accent transition-colors ulink"
    >
      <MailIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span className="tabular-nums">{copied ? "Copied!" : email}</span>
    </a>
  );
}
