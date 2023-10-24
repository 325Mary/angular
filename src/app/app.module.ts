import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemasComponent } from './temas/temas.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavmenuComponent} from "./navmenu/navmenu.component";
import {VocalesComponent}from "./vocales/vocales.component";
import {FrutasComponent } from "./frutas/frutas.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SorteoComponent } from "./sorteo/sorteo.component";
import { GasolinaComponent } from "./gasolina/gasolina.component";
import { CompraService } from "./servicecompra/servicecompra.component";

@NgModule({
  declarations: [
    AppComponent,
    TemasComponent,
    NavmenuComponent,
    VocalesComponent,
    FrutasComponent,
    SorteoComponent,
    GasolinaComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CompraService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
