import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "../layout/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import Productos from "../pages/Productos";
import Materiales from "../pages/Materiales";
import Ventas from "../pages/Ventas";
import Clientes from "../pages/Clientes";
import Produccion from "../pages/Produccion";
import Inventario from "../pages/Inventario";
import Reportes from "../pages/Reportes";
import Configuracion from "../pages/Configuracion";

import NuevoProductoPage from "../modules/productos/pages/NuevoProductoPage";
import EditarProductoPage from "../modules/productos/pages/EditarProductoPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>

          <Route
            path="/"
            element={<Dashboard />}
          />

          {/* Productos */}
          <Route
            path="/productos"
            element={<Productos />}
          />

          <Route
            path="/productos/nuevo"
            element={<NuevoProductoPage />}
          />

          <Route
            path="/productos/:id/editar"
            element={<EditarProductoPage />}
          />

          {/* Materiales */}
          <Route
            path="/materiales"
            element={<Materiales />}
          />

          {/* Ventas */}
          <Route
            path="/ventas"
            element={<Ventas />}
          />

          {/* Clientes */}
          <Route
            path="/clientes"
            element={<Clientes />}
          />

          {/* Producción */}
          <Route
            path="/produccion"
            element={<Produccion />}
          />

          {/* Inventario */}
          <Route
            path="/inventario"
            element={<Inventario />}
          />

          {/* Reportes */}
          <Route
            path="/reportes"
            element={<Reportes />}
          />

          {/* Configuración */}
          <Route
            path="/configuracion"
            element={<Configuracion />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}