import { Component, inject } from '@angular/core';
import { Producto } from '../model/producto.model';
import { ProductoServicio } from '../servicios/producto.service';

@Component({
  selector: 'app-producto-lista',
  imports: [],
  templateUrl: './producto-lista.html',
  
})
export class ProductoLista {
productos!: Producto[];

private productoServicio = inject(ProductoServicio);

ngOnInit() {
  // Se cargan los productos
  this.obtenerProductos();
}
private obtenerProductos(): void{
  this.productoServicio.obtenerProductosLista().subscribe({
    next: (datos) => {
      this.productos = datos;
    }, 
    error: (error) => console.error("Error al obtener productos", error)
  })
}
}
