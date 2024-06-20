import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { MenuComponent } from './menu/menu.component';
import { InformacionComponent } from './informacion/informacion.component';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    MenuComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterLinkActive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
