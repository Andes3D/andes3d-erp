import { Search, Plus } from "lucide-react";

import Button from "../../../components/ui/Button";

interface Props {

  search: string;

  onSearch: (value: string) => void;

  onNuevo: () => void;

}

export default function ProductosToolbar({
  search,
  onSearch,
  onNuevo,
}: Props) {

  return (

    <div className="flex items-center justify-between gap-4">

      <div className="relative w-full max-w-md">

        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Buscar producto..."
          className="
            w-full
            rounded-lg
            border
            border-slate-300
            bg-white
            py-2
            pl-10
            pr-4
            text-slate-900
            outline-none
            focus:border-blue-500
          "
        />

      </div>

      <Button onClick={onNuevo}>

        <Plus size={18} />

        Nuevo producto

      </Button>

    </div>

  );

}