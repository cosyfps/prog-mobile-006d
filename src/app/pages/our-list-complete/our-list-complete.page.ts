import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-list-complete',
  templateUrl: './our-list-complete.page.html',
  styleUrls: ['./our-list-complete.page.scss'],
})
export class OurListCompletePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToTODO(){
    this.router.navigate(['/our-list']);
  }

  goToAdd(){
    this.router.navigate(['/our-list-add']);
  }
  
}
