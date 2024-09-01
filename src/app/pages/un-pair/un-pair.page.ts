import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-un-pair',
  templateUrl: './un-pair.page.html',
  styleUrls: ['./un-pair.page.scss'],
})
export class UnPairPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSettings(){
    this.router.navigate(['/settings']);
  }

}
