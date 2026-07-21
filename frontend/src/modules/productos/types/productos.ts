export interface Producto {

  id: string;

  codigo: string;

  nombre: string;

  categoria_id: string;

  descripcion: string;

  material_principal: string;

  peso_material_g: number;

  tiempo_impresion_min: number;

  tiempo_postprocesado_min: number;

  costo_material: number;

  costo_impresion: number;

  costo_energia: number;

  costo_postprocesado: number;

  costo_pintura: number;

  costo_terminacion: number;

  costo_embalaje: number;

  costo_mano_obra: number;

  otros_costos: number;

  costo_total: number;

  precio_venta: number;

  utilidad: number;

  margen_pct: number;

  stock_actual: number;

  stock_minimo: number;

  estado: string;

  imagen_url: string;

  archivo_modelo: string;

  observaciones: string;

  creado_por: string;

  creado_en: string;

  actualizado_en: string;

}