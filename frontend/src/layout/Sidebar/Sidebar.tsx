import clsx from "clsx";

import SidebarHeader from "./SidebarHeader";
import SidebarContent from "./SidebarContent";
import SidebarFooter from "./SidebarFooter";

import { useSidebarStore } from "../../store/sidebar.store";

export default function Sidebar() {

  const { collapsed } = useSidebarStore();

  return (

    <aside
      className={clsx(
        "flex h-screen flex-col border-r border-slate-800 bg-slate-900 transition-all duration-300",
        collapsed ? "w-20" : "w-72"
      )}
    >

      <SidebarHeader collapsed={collapsed} />

      <SidebarContent collapsed={collapsed} />

      <SidebarFooter collapsed={collapsed} />

    </aside>

  );

}