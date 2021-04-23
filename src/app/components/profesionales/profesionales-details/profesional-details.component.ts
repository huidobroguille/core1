import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ProfesionalesService } from 'src/app/services/profesionales/profesionales.service';
import Profesional from 'src/app/models/profesionales-model/profesionales.model';

@Component({
  selector: 'app-profesional-details',
  templateUrl: './profesional-details.component.html',
  styleUrls: ['./profesional-details.component.css']
})
export class ProfesionalDetailsComponent implements OnInit, OnChanges {

  @Input() profesional?: Profesional;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentProfesional: Profesional = {
    nombre: '',
    apellido: '',
    numero:'',
    especialidad:''
  };
  message = '';

  constructor(private profesionalesService: ProfesionalesService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentProfesional = { ...this.profesional };
  }

  /*
  updatePublished(status: boolean): void {
    if (this.currentTutorial.key) {
      this.profesionalesService.update(this.currentTutorial.key, { published: status })
      .then(() => {
        this.currentTutorial.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }
*/

  updateProfesional(): void {
    const data = {
      nombre: this.currentProfesional.nombre,
      apellido: this.currentProfesional.apellido,
      numero: this.currentProfesional.numero,
      especialidad: this.currentProfesional.especialidad
    };

    if (this.currentProfesional.key) {
      this.profesionalesService.update(this.currentProfesional.key, data)
        .then(() => this.message = 'Actualizacion exitosa !')
        .catch(err => console.log(err));
    }
  }

  deleteProfesional(): void {
    if (this.currentProfesional.key) {
      this.profesionalesService.delete(this.currentProfesional.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'Actualizacion exitosa!';
        })
        .catch(err => console.log(err));
    }
  }
}
