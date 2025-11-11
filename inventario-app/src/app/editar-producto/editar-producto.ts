import { Component, inject } from '@angular/core';
import { Producto } from '../model/producto.model';
import { ActivatedRoute } from '@angular/router';
import { ProductoServicio } from '../servicios/producto.service';

@Component({
  selector: 'app-editar-producto',
  imports: [],
  templateUrl: './editar-producto.html'
})
export class EditarProducto {
  id!: number;
producto: Producto = new Producto();
private ruta = inject(ActivatedRoute); 
private productoServicio = inject(ProductoServicio);

ngOnInit() {
this.id = this.ruta.snapshot.params['id'];
this.productoServicio.obtenerProductoPorId(this.id).subscribe({
next: (datos) => this.producto = datos,
error: (error) => console.log('Error al obtener producto por id: ' , error)
});
}
}
