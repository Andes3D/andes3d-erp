import { menu } from "../../config/menu";
import SidebarItem from "./SidebarItem";

interface SidebarContentProps {
  collapsed?: boolean;
}

export default function SidebarContent({
  collapsed = false,
}: SidebarContentProps) {
  return (
    <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">

      {menu.map((item) => (
        <SidebarItem
          key={item.path}
          item={item}
          collapsed={collapsed}
        />
      ))}

    </nav>
  );
}