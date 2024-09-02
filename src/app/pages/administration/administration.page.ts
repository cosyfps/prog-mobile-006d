import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.page.html',
  styleUrls: ['./administration.page.scss'],
})
export class AdministrationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSettings(){
    this.router.navigate(['/settings']);
  }

}
