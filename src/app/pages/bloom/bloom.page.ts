import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bloom',
  templateUrl: './bloom.page.html',
  styleUrls: ['./bloom.page.scss'],
})
export class BloomPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLog() {
    this.router.navigate(['/log']);
  }
}
