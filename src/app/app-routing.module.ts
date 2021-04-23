import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfesionalesListComponent } from './components/profesionales/profesionales-list/profesionales-list.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'profesionales', component: ProfesionalesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
