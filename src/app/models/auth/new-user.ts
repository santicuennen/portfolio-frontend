export class NewUser {
  nombre: string;
  nombreUsuario: string;
  email: string;
  password: string;
  authorities: string[] | any;

  constructor(
    nombre: string,
    nombreUsuario: string,
    email: string,
    password: string
  ) {
    this.nombre = nombre;
    this.nombreUsuario = nombreUsuario;
    this.email = email;
    this.password = password;
  }
}
