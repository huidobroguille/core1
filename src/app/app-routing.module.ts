import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfesionalesListComponent } from './components/profesionales/profesionales-list/profesionales-list.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import {InicioComponent} from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'profesionales', component: ProfesionalesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
