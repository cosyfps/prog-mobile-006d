import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
})
export class LogPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToBloom(){
    this.router.navigate(['/bloom']);
  }

  goToFuture(){
    this.router.navigate(['/future']);
  }

  goToReflection(){
    this.router.navigate(['/reflection']);
  }

  goToRoot(){
    this.router.navigate(['/root']);
  }

}
