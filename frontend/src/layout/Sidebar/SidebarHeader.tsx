import { Box } from "lucide-react";

interface SidebarHeaderProps {
  collapsed?: boolean;
}

export default function SidebarHeader({
  collapsed = false,
}: SidebarHeaderProps) {
  return (
    <header className="flex h-16 items-center border-b border-slate-800 px-5">

      <Box
        size={30}
        className="text-blue-500 shrink-0"
      />

      {!collapsed && (
        <div className="ml-3 overflow-hidden">

          <h1 className="truncate text-lg font-bold text-white">
            Andes3D ERP
          </h1>

          <p className="truncate text-xs text-slate-400">
            Gestión Empresarial
          </p>

        </div>
      )}

    </header>
  );
}