import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration-task-add',
  templateUrl: './administration-task-add.page.html',
  styleUrls: ['./administration-task-add.page.scss'],
})
export class AdministrationTaskAddPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAdminTask(){
    this.router.navigate(['/administration-task']);
  }

}
