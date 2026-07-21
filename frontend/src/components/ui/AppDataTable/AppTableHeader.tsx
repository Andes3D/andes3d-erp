import { Column } from "./types";

interface Props<T> {

  columns: Column<T>[];

}

export default function AppTableHeader<T>({
  columns,
}: Props<T>) {

  return (

    <thead className="bg-slate-800">

      <tr>

        {columns.map((column) => (

          <th
            key={String(column.key)}
            className="
              px-6
              py-4
              text-left
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-slate-400
            "
          >
            {column.title}
          </th>

        ))}

      </tr>

    </thead>

  );

}