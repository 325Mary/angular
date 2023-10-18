import { Component } from '@angular/core';
@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.scss']
})
export class FrutasComponent {
    Fruta1: string ="";
      Fruta1valida: boolean = false;

      Fruta1Verdadera(){
        this.Fruta1valida = this.Fruta1.trim().toLowerCase() === 'apple';
      }

    Fruta2: string ="";
    Fruta3: string ="";
    Fruta4: string ="";
    Fruta5: string ="";
    Fruta6: string ="";

}
