import {
  LayoutDashboard,
  Package,
  Boxes,
  ShoppingCart,
  Users,
  Factory,
  Warehouse,
  FileBarChart2,
  Settings,
} from "lucide-react";

export const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },

  {
    title: "Productos",
    icon: Package,
    path: "/productos",
  },

  {
    title: "Materiales",
    icon: Boxes,
    path: "/materiales",
  },

  {
    title: "Ventas",
    icon: ShoppingCart,
    path: "/ventas",
  },

  {
    title: "Clientes",
    icon: Users,
    path: "/clientes",
  },

  {
    title: "Producción",
    icon: Factory,
    path: "/produccion",
  },

  {
    title: "Inventario",
    icon: Warehouse,
    path: "/inventario",
  },

  {
    title: "Reportes",
    icon: FileBarChart2,
    path: "/reportes",
  },

  {
    title: "Configuración",
    icon: Settings,
    path: "/configuracion",
  },
];