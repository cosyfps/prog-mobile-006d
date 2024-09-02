import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration-users-edit',
  templateUrl: './administration-users-edit.page.html',
  styleUrls: ['./administration-users-edit.page.scss'],
})
export class AdministrationUsersEditPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAdminUsers(){
    this.router.navigate(['/administration-users']);
  }
}
