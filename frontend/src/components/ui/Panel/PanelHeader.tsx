import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PanelHeader({
  children,
}: Props) {
  return (
    <header className="border-b border-slate-800 px-6 py-4">
      {children}
    </header>
  );
}