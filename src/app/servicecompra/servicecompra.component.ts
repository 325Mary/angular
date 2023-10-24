import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompraService {
  private currentId: number = 1; // Inicializa el ID en 1
  compras: any[] = [];

  constructor() {}

  registrarCompra(compra: any) {
    // Incrementa el ID y asígnalo a la compra
    compra.id = this.currentId++;
    this.compras.push(compra);
  }

  obtenerCompras() {
    return this.compras;
  }
}
