import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PanelBody({
  children,
}: Props) {
  return (
    <div className="p-6">
      {children}
    </div>
  );
}