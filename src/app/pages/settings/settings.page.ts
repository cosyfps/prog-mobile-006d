import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {}

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToYourInfo() {
    this.router.navigate(['/your-info']);
  }

  goToPairing() {
    this.router.navigate(['/pairing']);
  }

  goToTermsOfService() {
    this.router.navigate(['/terms-of-service']);
  }

  goToPrivacyPolicy() {
    this.router.navigate(['/privacy-policy']);
  }

  goToDeleteAccount() {
    this.router.navigate(['/delete-account']);
  }
  
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Logout',
      role: 'confirm',
      cssClass: 'logOut-button',
      handler: () => {
        console.log('Alert confirmed');
        this.router.navigate(['/login']);
      },
    },
  ];

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Logout!',
      message: 'Are you sure you want to log out?',
      buttons: this.alertButtons
    });

    await alert.present();
  }

  setResult(ev: CustomEvent) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
}
