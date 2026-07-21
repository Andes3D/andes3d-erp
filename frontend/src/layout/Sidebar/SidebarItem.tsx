import { NavLink } from "react-router-dom";
import clsx from "clsx";

import type { MenuItem } from "../../types/menu";

interface Props {
  item: MenuItem;
  collapsed?: boolean;
}

export default function SidebarItem({
  item,
  collapsed = false,
}: Props) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        clsx(
          "flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200",
          {
            "bg-blue-600 text-white shadow-lg": isActive,
            "text-slate-300 hover:bg-slate-800 hover:text-white":
              !isActive,
          }
        )
      }
    >
      <Icon size={20} />

      {!collapsed && (
        <span className="font-medium">
          {item.title}
        </span>
      )}
    </NavLink>
  );
}