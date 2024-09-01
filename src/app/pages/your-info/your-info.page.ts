import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-info',
  templateUrl: './your-info.page.html',
  styleUrls: ['./your-info.page.scss'],
})
export class YourInfoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSettings(){
    this.router.navigate(['/settings']);
  }

}
