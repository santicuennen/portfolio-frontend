import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { TokenService } from 'src/app/services/auth/token.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  myPortfolio: any | Person;
  isLogged = false;
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private datosPortfolio: PersonService
  ) {}
  ngOnInit() {
    this.datosPortfolio
      .getPerson()
      .subscribe((data) => (this.myPortfolio = data));
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
    this.router.navigate(['/login']);
  }
}
