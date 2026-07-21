import axios from "axios";
import type { Producto } from "../types/producto";

const api = import.meta.env.VITE_API_URL;

export async function obtenerProductos(): Promise<Producto[]> {

  const { data } = await axios.get(api, {
    params: {
      action: "productos"
    }
  });

  return data.data;

}