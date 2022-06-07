import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/auth/login-user';
import { TokenService } from 'src/app/services/auth/token.service';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  // form: FormGroup;

  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUser | any;
  nombreUsuario: string | any;
  password: string | any;
  roles: string[] | any = [];
  errMsj: string | any;

  constructor(
    private tokenService: TokenService,
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) /*  private fb: FormBuilder, 
    private authService: AuthenticationService,
   /*  private route: Router
  )*/ {
    /*  this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    }); */
  }
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  /* get Email() {
    return this.form.get('email');
  }
  get Password() {
    return this.form.get('password');
  }
  onSend(event: Event) {
    event.preventDefault;
    this.authService.login(this.form.value).subscribe((res) => {
      console.log(`DATA: ${JSON.stringify(res)}`);
      this.route.navigate(['/portfolio']);
    });
  } */

  onLogin(): void {
    this.loginUsuario = new LoginUser(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      (data: any) => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.toastr.success('Bienvenido ' + data.nombreUsuario, 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/portfolio']);
      },
      (err: any) => {
        this.isLogged = false;
        this.errMsj = err.error.message;
        /* this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        }); */
        // console.log(err.error.message);
      }
    );
  }
}
