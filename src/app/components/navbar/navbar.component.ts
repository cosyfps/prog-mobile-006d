import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  constructor(private router: Router) { }

  goToToday() {
    this.router.navigate(['/today']);
  }

  goToOurList() {
    this.router.navigate(['/our-list']);
  }

  goToLog() {
    this.router.navigate(['/log']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}