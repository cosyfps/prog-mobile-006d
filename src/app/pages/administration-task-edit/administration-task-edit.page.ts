import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration-task-edit',
  templateUrl: './administration-task-edit.page.html',
  styleUrls: ['./administration-task-edit.page.scss'],
})
export class AdministrationTaskEditPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAdminTask(){
    this.router.navigate(['/administration-task']);
  }

}
