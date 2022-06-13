import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Proyects } from '../models/Proyects';

@Injectable({
  providedIn: 'root',
})
export class ProyectsService {
  private url = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  getProyects(): Observable<Proyects[]> {
    return this.http.get<Proyects[]>(`${this.url}/proyects`);
  }
  onDeleteProyect(proyect: Proyects): Observable<Proyects> {
    return this.http.delete<Proyects>(`${this.url}/delete/proy/${proyect.id}`);
  }
  addPry(f: NgForm) {
    return this.http.post(`${this.url}/new/proy`, f.value);
  }
  editPry(editForm: FormGroup): Observable<any> {
    return this.http.put(
      `${this.url}/modify/proyect/${editForm.value.id}`,
      editForm.value
    );
  }
}
