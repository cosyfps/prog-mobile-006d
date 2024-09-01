import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.page.html',
  styleUrls: ['./root.page.scss'],
})
export class RootPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLog() {
    this.router.navigate(['/log']);
  }

}
