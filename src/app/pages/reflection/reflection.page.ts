import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reflection',
  templateUrl: './reflection.page.html',
  styleUrls: ['./reflection.page.scss'],
})
export class ReflectionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLog() {
    this.router.navigate(['/log']);
  }

}
