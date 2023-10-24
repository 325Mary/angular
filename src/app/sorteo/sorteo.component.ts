import { Component } from '@angular/core';
import { CompraService } from '../servicecompra/servicecompra.component';

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.scss']
})
export class SorteoComponent {
  compras: any[] = [];
  listaDeCodigos: string[] = [
    "6856",
    "36577",
    "3747",
    "789689", 
    "5998",
    "85658",
    "36847"
  ];

  constructor(private compraService: CompraService) {
    this.compras = this.compraService.obtenerCompras();
  }

  realizarSorteo() {
    const codigoSorteo = this.obtenerCodigoAleatorio();
    window.alert(`Código de Sorteo seleccionado: ${codigoSorteo}`);
  }
  
  obtenerCodigoAleatorio() {
    // Obtiene un código al azar de la lista de códigos disponibles
    const codigoAleatorioIndex = Math.floor(Math.random() * this.listaDeCodigos.length);
    return this.listaDeCodigos[codigoAleatorioIndex];
  }
  
}
