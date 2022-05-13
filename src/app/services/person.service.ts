import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  public apiUrl = 'http://localhost:8080/person/1';
  constructor(private http: HttpClient) {}

  getPerson(): Observable<Person> {
    return this.http.get<Person>(this.apiUrl);
  }
}
