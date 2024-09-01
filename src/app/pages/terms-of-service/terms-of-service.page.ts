import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.page.html',
  styleUrls: ['./terms-of-service.page.scss'],
})
export class TermsOfServicePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSettings(){
    this.router.navigate(['/settings']);
  }
}
