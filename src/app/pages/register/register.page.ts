import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  User: string = '';
  Password: string = '';
  ConfirmPassword: string = '';

  constructor(private router: Router) { }

  ngOnInit() {}

  register() {
    if (this.Password === this.ConfirmPassword) {
      // Lógica para registrar al usuario, como enviar los datos al backend
      console.log('Usuario registrado:', this.User);
      this.router.navigate(['/login']);
    } else {
      console.log('Las contraseñas no coinciden.');
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
