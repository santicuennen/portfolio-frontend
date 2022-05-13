import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../models/Skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private url = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(`${this.url}/skills`);
  }
  onDeleteSkill(skill: Skills): Observable<Skills> {
    return this.http.delete<Skills>(`${this.url}/delete/skill/${skill.id}`);
  }
}
