import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToYourInfo(){
    this.router.navigate(['/your-info']);
  }

  goToPairing(){
    this.router.navigate(['/pairing']);
  }

  goToTermsOfService(){
    this.router.navigate(['/terms-of-service']);
  }

  goToPrivacyPolicy(){
    this.router.navigate(['/privacy-policy']);
  }

  goToDeleteAccount(){
    this.router.navigate(['/delete-account']);
  }

}
