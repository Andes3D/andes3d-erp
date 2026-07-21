import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PanelFooter({
  children,
}: Props) {
  return (
    <footer className="border-t border-slate-800 px-6 py-4">
      {children}
    </footer>
  );
}