import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { TokenService } from 'src/app/services/auth/token.service';
import { ToastrService } from 'ngx-toastr';
import { NewUser } from 'src/app/models/auth/new-user';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css'],
})
export class NewUserFormComponent implements OnInit {
  nuevoUsuario: NewUser | any;
  nombre: string | any;
  nombreUsuario: string | any;
  email: string | any;
  password: string | any;
  errMsj: string | any;
  isLogged = false;

  constructor(
    private tokenService: TokenService,
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NewUser(
      this.nombre,
      this.nombreUsuario,
      this.email,
      this.password
    );
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      (data) => {
        this.toastr.success('Cuenta Creada', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });

        this.router.navigate(['/login']);
      },
      (err) => {
        this.errMsj = err.error.mensaje;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        // console.log(err.error.message);
      }
    );
  }
}
