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
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TemasComponent,
    NavmenuComponent,
    VocalesComponent,
    FrutasComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
