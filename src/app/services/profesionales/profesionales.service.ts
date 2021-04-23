import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Profesional from '../../models/profesionales-model/profesionales.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalesService {

  private dbPath = '/profesionales';

  profesionalesRef: AngularFireList<Profesional>;

  constructor(private db: AngularFireDatabase) {
    this.profesionalesRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Profesional> {
    return this.profesionalesRef;
  }

  create(profesional: Profesional): any {
    return this.profesionalesRef.push(profesional);
  }

  update(key: string, value: any): Promise<void> {
    return this.profesionalesRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.profesionalesRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.profesionalesRef.remove();
  }
}
