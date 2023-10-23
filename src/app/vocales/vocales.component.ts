import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { letra } from '../modelo/letra';

@Component({
  selector: 'app-vocales',
  templateUrl: './vocales.component.html',
  styleUrls: ['./vocales.component.scss']
})
export class VocalesComponent {
  letraA: string ="";
  letraE: string ="";
  letraI: string ="";
  letraO: string ="";
  letraU: string ="";

  letras: letra = new letra();

  resultadoA: string = "";
  resultadoE: string = "";
  resultadoI: string = "";
  resultadoO: string = "";
  resultadoU: string = "";
  
  ngOnInit() {
  }
  // Método para comparar la similitud
  compararSimilitudA() {
    console.log("Input event fired")
    if (this.letras.letraA.toLowerCase() === this.letraA.toLowerCase()) {
      this.resultadoA = "Correcto";
    } else {
      this.resultadoA = "Incorrecto";
    }
  }
  compararSimilitudE() {
    console.log("Input event fired")
    if (this.letras.letraE.toLowerCase() === this.letraE.toLowerCase()) {
      this.resultadoE = "Correcto";
    } else {
      this.resultadoE = "Incorrecto";
    }
  }

  compararSimilitudI() {
    console.log("Input event fired")
    if (this.letras.letraI.toLowerCase() === this.letraI.toLowerCase()) {
      this.resultadoI = "Correcto";
    } else {
      this.resultadoI = "Incorrecto";
    }
  }

  compararSimilitudO() {
    console.log("Input event fired")
    if (this.letras.letraO.toLowerCase() === this.letraO.toLowerCase()) {
      this.resultadoO = "Correcto";
    } else {
      this.resultadoO = "Incorrecto";
    }
  }

  compararSimilitudU() {
    console.log("Input event fired")
    if (this.letras.letraU.toLowerCase() === this.letraU.toLowerCase()) {
      this.resultadoU = "Correcto";
    } else {
      this.resultadoU = "Incorrecto";
    }
  }

}
