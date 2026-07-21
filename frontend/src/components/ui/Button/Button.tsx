import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "ghost";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        `
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-lg
        px-4
        py-2
        text-sm
        font-medium
        transition-all
        duration-200
        disabled:cursor-not-allowed
        disabled:opacity-50
        shadow-sm
        `,
        {
          "bg-blue-600 text-white hover:bg-blue-700":
            variant === "primary",

          "bg-slate-200 text-slate-800 hover:bg-slate-300":
            variant === "secondary",

          "bg-red-600 text-white hover:bg-red-700":
            variant === "danger",

          "bg-emerald-600 text-white hover:bg-emerald-700":
            variant === "success",

          "bg-transparent text-slate-700 hover:bg-slate-100":
            variant === "ghost",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}