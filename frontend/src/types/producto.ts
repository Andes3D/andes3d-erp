export interface Producto {
  id: string;

  codigo: string;

  nombre: string;

  categoria_id: string;

  descripcion: string;

  costo_material: number;

  costo_impresion: number;

  costo_postprocesado: number;

  costo_terminacion: number;

  costo_embalaje: number;

  costo_mano_obra: number;

  costo_total: number;

  precio_venta: number;

  stock_actual: number;

  stock_minimo: number;

  estado: string;

  imagen_url: string;

  observaciones: string;
}