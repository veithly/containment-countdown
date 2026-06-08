"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

const actions = [
  { label: "Open mission", href: "/mission", hint: "Run the containment countdown" },
  { label: "Review decision", href: "/decision", hint: "Inspect SPL transcript and approval policy" },
  { label: "Open dossier", href: "/dossier/demo", hint: "Verify the proof artifact" },
  { label: "Inspect architecture", href: "/architecture", hint: "Read Splunk-compatible replay assumptions" },
  { label: "Reset replay", href: "/replay", hint: "Start from the deterministic seed" },
];

export function CommandPalette() {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return actions;
    return actions.filter((action) => `${action.label} ${action.hint}`.toLowerCase().includes(normalized));
  }, [query]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "/") {
      setQuery("");
    }
    if (event.key === "j") {
      setActiveIndex((index) => Math.min(index + 1, Math.max(filtered.length - 1, 0)));
    }
    if (event.key === "k") {
      setActiveIndex((index) => Math.max(index - 1, 0));
    }
  }

  return (
    <div className="command-palette" aria-label="CommandPalette">
      <Search size={16} />
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="Search routes and actions"
      />
      <div className="command-results">
        {filtered.slice(0, 3).map((action, index) => (
          <Link key={action.href} href={action.href} className={index === activeIndex ? "active" : ""}>
            <span>{action.label}</span>
            <small>{action.hint}</small>
          </Link>
        ))}
      </div>
    </div>
  );
}
