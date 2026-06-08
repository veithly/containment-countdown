import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/shell/app-shell";

export const metadata: Metadata = {
  title: "Containment Countdown",
  description: "Approve containment for risky identities in 60 seconds after evidence crosses threshold.",
  openGraph: {
    title: "Containment Countdown",
    description: "Evidence crosses threshold. A human approves. The dossier proves why.",
    images: ["/brand/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
