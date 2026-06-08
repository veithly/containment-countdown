import Link from "next/link";
import { C60Mark } from "@/components/brand/c60-mark";
import { CommandPalette } from "@/components/interaction/CommandPalette";
import { DensityToggle } from "@/components/interaction/DensityToggle";
import { InlineEdit } from "@/components/interaction/InlineEdit";
import { SideNav } from "@/components/shell/SideNav";
import { HERO_COMPOSITION, VISUAL_LANE, VISUAL_LANE_LABEL } from "@/lib/containment";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell" data-visual-lane={VISUAL_LANE} data-visual-lane-label={VISUAL_LANE_LABEL} data-mode="test-mode">
      <header className="topbar" data-hero-composition={HERO_COMPOSITION}>
        <Link className="brand-lockup" href="/" aria-label="Containment Countdown home">
          <C60Mark className="brand-mark" />
          <span>
            <strong>Containment</strong>
            <span>Countdown</span>
          </span>
        </Link>
        <SideNav />
        <div className="topbar-tools">
          <CommandPalette />
          <DensityToggle />
          <InlineEdit />
          <span className="replay-pill">Seeded Splunk-compatible telemetry</span>
        </div>
      </header>
      {children}
    </div>
  );
}
