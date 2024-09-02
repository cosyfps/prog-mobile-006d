import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  User: string = '';
  Email: string = '';
  Password: string = '';
  ConfirmPassword: string = '';

  constructor(private router: Router) { }

  ngOnInit() {}

  register() {
    if (this.Password === this.ConfirmPassword) {
      // Crear el objeto NavigationExtras con los datos del usuario
      let navigationExtras: NavigationExtras = {
        state: {
          rUser: this.User,
          rPassword: this.Password
        }
      };
  
      // Navegar a la página de inicio de sesión pasando los datos
      this.router.navigate(['/login'], navigationExtras);
    } else {
      console.log('Las contraseñas no coinciden.');
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
