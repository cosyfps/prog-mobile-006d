import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Email:String ='';
  Password:String ='';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['/today']);
  }

  forgotPassword() {
    this.router.navigate(['']);
  }

  signIn() {
    this.router.navigate(['/register']);
  }

}

