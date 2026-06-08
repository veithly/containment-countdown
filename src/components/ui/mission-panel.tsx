import { clsx } from "clsx";

export function MissionPanel({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <section className={clsx("mission-panel", className)} aria-label={title}>
      {title ? <div className="panel-title">{title}</div> : null}
      {children}
    </section>
  );
}
