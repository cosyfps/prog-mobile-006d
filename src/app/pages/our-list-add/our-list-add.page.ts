import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-list-add',
  templateUrl: './our-list-add.page.html',
  styleUrls: ['./our-list-add.page.scss'],
})
export class OurListAddPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToOurList() {
    this.router.navigate(['/our-list']);
  }

}
