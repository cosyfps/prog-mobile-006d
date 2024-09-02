import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  User: string = '';
  Password: string = '';
  registeredUser: string = '';
  registeredPassword: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        const state = this.router.getCurrentNavigation()?.extras.state as {
          rUser: string;
          rPassword: string;
        };
        this.registeredUser = state.rUser;
        this.registeredPassword = state.rPassword;
      }
    });
  }

  ngOnInit() {}

  login() {
    if (this.User === this.registeredUser && this.Password === this.registeredPassword) {
      let navigationExtras: NavigationExtras = {
        state: {
          user: this.User,
          password: this.Password
        }
      };
      this.router.navigate(['/today'], navigationExtras);
    } else {
      console.log('Nombre de usuario o contraseña incorrectos.');
    }
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  signUp() {
    this.router.navigate(['/register']);
  }

}
