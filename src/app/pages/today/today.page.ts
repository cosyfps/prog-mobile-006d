import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
})
export class TodayPage implements OnInit {

  usuarioLogin!: string;
  passwordLogin!: string;

  constructor(private router: Router, private activatedroute: ActivatedRoute) {
    this.activatedroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state){
        this.usuarioLogin = this.router.getCurrentNavigation()?.extras?.state?.['user'];
        this.passwordLogin = this.router.getCurrentNavigation()?.extras?.state?.['password'];
      }
    })
  }

  ngOnInit() {
  }

}
