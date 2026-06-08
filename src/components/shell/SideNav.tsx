import Link from "next/link";

const navItems = [
  { href: "/mission", label: "Mission" },
  { href: "/decision", label: "Decision" },
  { href: "/dossier/demo", label: "Dossier" },
  { href: "/architecture", label: "Architecture" },
  { href: "/replay", label: "Replay" },
];

export function SideNav() {
  return (
    <div className="side-nav-wrap">
      <button type="button" className="collapse-button min-h-11 min-w-11" data-collapse-toggle aria-label="Collapse navigation">
        Menu
      </button>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
