import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './informacion/informacion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ReporteUsuarioComponent } from './reporte-usuario/reporte-usuario.component';

const routes: Routes = [
  { path: 'informacion', component: InformacionComponent},
  { path: 'formulario2', component: FormularioComponent},
  { path: 'formulario', component: Formulario2Component},
  { path: 'reportes', component: ReporteComponent},
  { path: 'reporte_user', component: ReporteUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
