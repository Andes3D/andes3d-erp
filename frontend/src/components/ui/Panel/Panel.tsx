import type { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
}

export default function Panel({
  children,
}: PanelProps) {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-lg">
      {children}
    </section>
  );
}