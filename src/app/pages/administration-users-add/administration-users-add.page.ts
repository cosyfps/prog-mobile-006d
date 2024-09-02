import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration-users-add',
  templateUrl: './administration-users-add.page.html',
  styleUrls: ['./administration-users-add.page.scss'],
})
export class AdministrationUsersAddPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAdminUsers(){
    this.router.navigate(['/administration-users']);
  }

}
