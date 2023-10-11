import { Component,OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.scss']
})
export class TemasComponent {
   
   constructor(@Inject(Router) private router: Router) {}
   //elemento de entrada
   ngOnInit() {}

   
  
}
   
