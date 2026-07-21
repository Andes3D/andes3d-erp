import type { LucideIcon } from "lucide-react";

export interface MenuItem {
  title: string;
  path: string;
  icon: LucideIcon;
  permission?: string;
  children?: MenuItem[];
}

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

import type { MenuItem } from "../types/menu";

export const menu: MenuItem[] = [
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