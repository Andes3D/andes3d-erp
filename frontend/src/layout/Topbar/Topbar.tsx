import { Menu, Bell } from "lucide-react";

import { useSidebarStore } from "../../store/sidebar.store";

export default function Topbar() {

  const { toggle } = useSidebarStore();

  return (

    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900 px-6">

      <div className="flex items-center gap-4">

        <button
          onClick={toggle}
          className="rounded-lg p-2 transition hover:bg-slate-800"
        >

          <Menu
            className="text-slate-300"
          />

        </button>

        <h2 className="text-lg font-semibold text-white">

          Andes3D ERP

        </h2>

      </div>

      <div className="flex items-center gap-5">

        <Bell
          className="text-slate-400"
        />

        <div className="h-9 w-9 rounded-full bg-blue-600"/>

      </div>

    </header>

  );

}