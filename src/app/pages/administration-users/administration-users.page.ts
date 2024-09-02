import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration-users',
  templateUrl: './administration-users.page.html',
  styleUrls: ['./administration-users.page.scss'],
})
export class AdministrationUsersPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAdministration(){
    this.router.navigate(['/administration']);
  }

  goToAddUser(){
    this.router.navigate(['/administration-users-add']);
  }
}
