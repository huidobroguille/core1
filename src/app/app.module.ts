import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import {ProfesionalesListComponent} from './components/profesionales/profesionales-list/profesionales-list.component'
import {ProfesionalDetailsComponent} from './components/profesionales/profesionales-details/profesional-details.component';
import {InicioComponent} from './components/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    ProfesionalesListComponent,
    ProfesionalDetailsComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
