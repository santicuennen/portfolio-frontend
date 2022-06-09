import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Education } from '../models/Education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private url = 'http://localhost:8080/api';
  editForm: any | FormGroup;
  education: any | Education;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  getEdus(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.url}/edus`);
  }

  onDeleteEdu(degree: Education): Observable<Education> {
    return this.http.delete<Education>(`${this.url}/delete/edu/${degree.id}`);
  }
  addEdu(f: NgForm) {
    return this.http.post(`${this.url}/new/edu`, f.value);
  }
  editEdu(editForm: FormGroup): Observable<any> {
    return this.http.put(
      `${this.url}/modify/edu/${editForm.value.id}`,
      editForm.value
    );
  }
}
