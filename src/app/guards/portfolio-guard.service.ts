import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { TokenService } from '../services/auth/token.service';

@Injectable({
  providedIn: 'root',
})
export class PortfolioGuardService implements CanActivate {
  realRol: string | any;

  constructor(private tokenService: TokenService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const expectedRole = route.data['expectedRole'];
    const roles = this.tokenService.getAuthorities();
    this.realRol = 'user';
    roles.forEach((role) => {
      if (role === 'ROLE_ADMIN') {
        this.realRol = 'admin';
      }
    });
    if (
      !this.tokenService.getToken() ||
      expectedRole.indexOf(this.realRol) === -1
    ) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
