import { UserCircle2 } from "lucide-react";

interface SidebarFooterProps {
  collapsed?: boolean;
}

export default function SidebarFooter({
  collapsed = false,
}: SidebarFooterProps) {
  return (
    <footer className="border-t border-slate-800 p-4">

      <div className="flex items-center">

        <UserCircle2
          size={38}
          className="text-slate-400 shrink-0"
        />

        {!collapsed && (
          <div className="ml-3 overflow-hidden">

            <p className="truncate font-medium text-white">
              Daniel Benavides
            </p>

            <p className="truncate text-xs text-slate-400">
              Administrador
            </p>

          </div>
        )}

      </div>

    </footer>
  );
}