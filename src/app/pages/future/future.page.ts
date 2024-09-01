import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-future',
  templateUrl: './future.page.html',
  styleUrls: ['./future.page.scss'],
})
export class FuturePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLog() {
    this.router.navigate(['/log']);
  }

}
