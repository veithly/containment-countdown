type C60MarkProps = {
  className?: string;
  title?: string;
};

export function C60Mark({ className, title = "Containment Countdown C60 Seal" }: C60MarkProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label={title}>
      <circle cx="32" cy="32" r="23" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="110 34" />
      <path d="M32 14 46 20v12c0 9.5-5.9 16.8-14 20-8.1-3.2-14-10.5-14-20V20z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M24 29h18M24 35h15M24 41h11" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="48" cy="48" r="4.2" fill="currentColor" />
      <path d="M44 11h7M50.5 11v7" fill="none" stroke="var(--signal-warn)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
