import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
})
export class TodayPage implements OnInit {

  usuarioLogin: string = '';
  passwordLogin: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        const state = this.router.getCurrentNavigation()?.extras.state as {
          user: string;
          password: string;
        };
        this.usuarioLogin = state.user;
        this.passwordLogin = state.password;
      }
    });
  }

  ngOnInit() {
    console.log('Usuario:', this.usuarioLogin);
    console.log('Password:', this.passwordLogin);
  }
}
