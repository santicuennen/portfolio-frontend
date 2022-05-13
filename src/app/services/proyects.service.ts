import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
