import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { MenuComponent } from './menu/menu.component';
import { InformacionComponent } from './informacion/informacion.component';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
import { Formulario2Component } from './formulario2/formulario2.component';
import { HttpClientModule } from '@angular/common/http';
import { GastoService } from './gasto.service';
import { ReporteComponent } from './reporte/reporte.component';
import { ReporteUsuarioComponent } from './reporte-usuario/reporte-usuario.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    MenuComponent,
    InformacionComponent,
    Formulario2Component,
    ReporteComponent,
    ReporteUsuarioComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterLinkActive,
    HttpClientModule
  ],
  providers: [GastoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
