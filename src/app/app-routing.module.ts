import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TemasComponent } from './temas/temas.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { VocalesComponent } from "./vocales/vocales.component";
import { FrutasComponent } from "./frutas/frutas.component";
import { ColoresComponent } from "./colores/colores.component";
import { AnimalesComponent } from "./animales/animales.component";
import { SorteoComponent } from "./sorteo/sorteo.component";
import { GasolinaComponent } from "./gasolina/gasolina.component";import { CompraService } from "./servicecompra/servicecompra.component";

const routes: Routes = [
  //rutas de navegacion
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'temas', component: TemasComponent},
  {path: 'vocales', component: VocalesComponent},
  {path: 'frutas', component:FrutasComponent},
  {path: 'colores', component:ColoresComponent},
  {path: 'animales', component: AnimalesComponent},
  {path: 'sorteo', component: SorteoComponent},
  {path: 'gasolina', component: GasolinaComponent},
 
  { path: '**', component: PagenotfoundComponent },



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
