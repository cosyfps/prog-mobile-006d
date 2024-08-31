import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  User: string = '';
  Password: string = '';

  constructor(private router: Router) { }

  ngOnInit() {}

  login() {
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.User,
        password: this.Password
      }
    };

    this.router.navigate(['/today'], navigationExtras);
  }

  forgotPassword() {
    this.router.navigate(['']);
  }

  signUp() {
    this.router.navigate(['/register']);
  }
}
