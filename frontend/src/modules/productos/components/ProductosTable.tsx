import type { Producto } from "../types/producto";

interface ProductosTableProps {
  productos: Producto[];
}

export default function ProductosTable({
  productos,
}: ProductosTableProps) {
  if (productos.length === 0) {
    return (
      <div className="rounded-lg border border-slate-700 bg-slate-900 p-8 text-center text-slate-400">
        No existen productos registrados.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
      <table className="min-w-full">
        <thead className="bg-slate-800">
          <tr>
            <th className="px-4 py-3 text-left">Código</th>
            <th className="px-4 py-3 text-left">Nombre</th>
            <th className="px-4 py-3 text-left">Precio</th>
            <th className="px-4 py-3 text-left">Stock</th>
            <th className="px-4 py-3 text-left">Estado</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((producto) => (
            <tr
              key={producto.id}
              className="border-t border-slate-800 hover:bg-slate-800/50"
            >
              <td className="px-4 py-3">{producto.codigo}</td>

              <td className="px-4 py-3">{producto.nombre}</td>

              <td className="px-4 py-3">
                ${Number(producto.precio_venta).toLocaleString("es-CL")}
              </td>

              <td className="px-4 py-3">{producto.stock_actual}</td>

              <td className="px-4 py-3">
                {producto.estado}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}