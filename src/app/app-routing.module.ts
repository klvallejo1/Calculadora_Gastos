import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './informacion/informacion.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: 'informacion', component: InformacionComponent},
  { path: 'formulario2', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
