import { Component, OnInit } from '@angular/core';
import { ProfesionalesService } from 'src/app/services/profesionales/profesionales.service';
import Profesional from 'src/app/models/profesionales-model/profesionales.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profesional-list',
  templateUrl: './profesionales-list.component.html',
  styleUrls: ['./profesionales-list.component.css']
})
export class ProfesionalesListComponent implements OnInit {

  profesionales?: Profesional[];
  currentProfesional?: Profesional;
  currentIndex = -1;
  title = '';

  constructor(private profesionalService: ProfesionalesService) { }

  profesional : Profesional = new Profesional();

  ngOnInit(): void {
    this.retrieveProfesionales();
  }

  refreshList(): void {
    this.currentProfesional = undefined;
    this.currentIndex = -1;
    this.retrieveProfesionales();
  }

  retrieveProfesionales(): void {
    this.profesionalService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.profesionales = data;
    });
  }

  setActiveProfesional(profesional: Profesional, index: number): void {
    this.currentProfesional = profesional;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.profesionalService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }

  saveProfesional(): void {
    this.profesionalService.create(this.profesional).then(() => {
      console.log('Creacion correcta!');
    });
  }

  newProfesional(): void {
    this.profesional = new Profesional();
  }

}
