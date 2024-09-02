import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration-task',
  templateUrl: './administration-task.page.html',
  styleUrls: ['./administration-task.page.scss'],
})
export class AdministrationTaskPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAdministration(){
    this.router.navigate(['/administration']);
  }

  goToAddTask(){
    this.router.navigate(['/administration-task-add']);
  }

  goToEditTask(){
    this.router.navigate(['/administration-task-edit']);
  }

}
