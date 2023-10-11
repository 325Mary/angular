import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  ngOnInit(){

  }
  // Función que se ejecuta cuando se hace clic en el botón
  onStartClick() {
    this.router.navigate(['/temas/']);
  }

}
