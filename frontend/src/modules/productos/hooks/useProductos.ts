import { useQuery } from "@tanstack/react-query";
import { obtenerProductos } from "../services/productos.service";

export function useProductos() {

  return useQuery({

    queryKey: ["productos"],

    queryFn: obtenerProductos

  });

}