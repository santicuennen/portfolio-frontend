import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
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
  addSkill(f: NgForm) {
    return this.http.post(`${this.url}/new/skill`, f.value);
  }
  editSkill(editForm: FormGroup): Observable<any> {
    return this.http.put(
      `${this.url}/modify/skill/${editForm.value.id}`,
      editForm.value
    );
  }
}
