import { Component } from '@angular/core';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.scss']
})
export class TemasComponent {
   selection: Component | null=null
   constructor() {}
   //elemento de entrada
   ngOnInit() {}

   generateComponent() {
    console.log(this.selection);
   }
}
