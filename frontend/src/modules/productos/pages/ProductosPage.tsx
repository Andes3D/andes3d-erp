import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import PageHeader from "../../../components/ui/PageHeader";

import ProductosToolbar from "../components/ProductosToolbar";
import ProductosTable from "../components/ProductosTable";

import { useProductos } from "../hooks/useProductos";

export default function ProductosPage() {
  const navigate = useNavigate();

  const {
    data,
    isLoading,
    error,
  } = useProductos();

  const [search, setSearch] = useState("");

  const productos = useMemo(() => {
    if (!data) return [];

    const texto = search.toLowerCase();

    return data.filter((producto) => {
      return (
        producto.nombre?.toLowerCase().includes(texto) ||
        producto.codigo?.toLowerCase().includes(texto)
      );
    });
  }, [data, search]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar productos.</div>;
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Productos"
        description="Administración del catálogo de productos."
      />

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <ProductosToolbar
          search={search}
          onSearch={setSearch}
          onNuevo={() => navigate("/productos/nuevo")}
        />

        <div className="mt-6">
          <ProductosTable
            productos={productos}
          />
        </div>
      </div>
    </div>
  );
}