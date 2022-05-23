import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  public apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  getPerson(): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/person/1`);
  }
  editPerson(editForm: FormGroup): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/modify/person/${editForm.value.id}`,
      editForm.value
    );
  }
  patchPerson(editForm: FormGroup): Observable<any> {
    return this.http.patch(
      `${this.apiUrl}/patch/person/${editForm.value.id}`,
      editForm.value
    );
  }
}
