import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Asegúrate de agregar esta importación

import { CompraService } from '../servicecompra/servicecompra.component'
@Component({
  selector: 'app-gasolina',
  templateUrl: './gasolina.component.html',
  styleUrls: ['./gasolina.component.scss']
})

export class GasolinaComponent {
realizarSorteo() {
throw new Error('Method not implemented.');
}
  id: number = 0;
  monto: number = 0;
  fecha: Date = new Date();
  listaDeCodigos: string[] = [
    "6856",
    "36577",
    "3747",
    "789689", 
    "5998",
    "85658",
    "36847"
  ];
compras: any;

  constructor(private compraService: CompraService) {}

  registrarCompra() {
    // Genera un código único seleccionando uno de los códigos disponibles al azar
    const codigoSeleccionado = this.obtenerCodigoAleatorio();

    // Crea un objeto de compra
    const compra = {
      id: this.id,
      monto: this.monto,
      fecha: this.fecha,
      codigoSorteo: codigoSeleccionado,
    };

    // Registra la compra en el servicio de compras
    this.compraService.registrarCompra(compra);

   
    // Muestra una alerta con el código asignado
    window.alert(`Código asignado: ${codigoSeleccionado}`);
  }

  obtenerCodigoAleatorio() {
    // Obtiene un código al azar de la lista de códigos disponibles
    const codigoAleatorioIndex = Math.floor(Math.random() * this.listaDeCodigos.length);
    return this.listaDeCodigos[codigoAleatorioIndex];
  }

  // Método para obtener la lista de compras
  obtenerCompras() {
    return this.compraService.obtenerCompras();
  }
}
