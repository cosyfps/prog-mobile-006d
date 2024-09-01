import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-list-task',
  templateUrl: './our-list-task.page.html',
  styleUrls: ['./our-list-task.page.scss'],
})
export class OurListTaskPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToOurList(){
    this.router.navigate(['/our-list']);
  }
}
