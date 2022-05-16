import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/Education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private url = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  getEdus(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.url}/edus`);
  }

  onDeleteEdu(degree: Education): Observable<Education> {
    return this.http.delete<Education>(`${this.url}/delete/edu/${degree.id}`);
  }
}
