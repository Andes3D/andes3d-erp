import { ReactNode } from "react";
import clsx from "clsx";

interface Props {

  children: ReactNode;

  align?: "left" | "center" | "right";

}

export default function AppTableCell({

  children,

  align = "left",

}: Props) {

  return (

    <td
      className={clsx(
        "px-6 py-4 text-sm text-slate-200",

        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        }
      )}
    >
      {children}
    </td>

  );

}