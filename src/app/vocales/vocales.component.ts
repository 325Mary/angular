import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {letras } from "../modelo/letra";

@Component({
  selector: 'app-vocales',
  templateUrl: './vocales.component.html',
  styleUrls: ['./vocales.component.scss']
})
export class VocalesComponent {
  
  letra: string = '';

  constructor() {}

  ngOnInit() {
  }

}
