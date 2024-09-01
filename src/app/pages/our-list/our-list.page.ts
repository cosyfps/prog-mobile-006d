import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-list',
  templateUrl: './our-list.page.html',
  styleUrls: ['./our-list.page.scss'],
})
export class OurListPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToComplete(){
    this.router.navigate(['/our-list-complete']);
  }

  goToAdd(){
    this.router.navigate(['/our-list-add']);
  }

  goToTask() {
    this.router.navigate(['/our-list-task']);
  }
  
}
