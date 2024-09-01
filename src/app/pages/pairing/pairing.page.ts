import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pairing',
  templateUrl: './pairing.page.html',
  styleUrls: ['./pairing.page.scss'],
})
export class PairingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSettings(){
    this.router.navigate(['/settings']);
  }

  goToUnPair(){
    this.router.navigate(['/un-pair']);
  }
  
}
