import { ReactNode } from "react";

interface Props {

  children: ReactNode;

}

export default function AppTableRow({

  children,

}: Props) {

  return (

    <tr
      className="
        border-t
        border-slate-800
        hover:bg-slate-800
        transition-colors
      "
    >
      {children}
    </tr>

  );

}