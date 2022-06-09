import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewUser } from '../../models/auth/new-user';
import { LoginUser } from '../../models/auth/login-user';
import { JwtDTO } from '../../models/auth/jwt-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authURL = 'http://localhost:8080/api/auth/';

  constructor(private httpClient: HttpClient) {}

  public nuevo(nuevoUsuario: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUser): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }
}
