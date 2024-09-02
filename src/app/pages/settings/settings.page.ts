import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  // * Cambiar para presentacion
  isAdmin: boolean = true;

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
      handler: () => {
        console.log('Alert confirmed');
        this.router.navigate(['/login']);
      },
    },
  ];

  async logOutAlert() {
    const alert = await this.alertController.create({
      header: 'Logout!',
      message: 'Are you sure you want to log out?',
      buttons: this.alertButtons,
      cssClass: 'logOut-button',
    });

    await alert.present();
  }

  public singleButtonAlert = [
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  // Presenta la alerta con un solo botón
  async restorePuerchaseAlert() {
    const alert = await this.alertController.create({
      header: 'Error!',
      message: 'No purchase found to restore.',
      buttons: this.singleButtonAlert
    });

    await alert.present();
  }

  setResult(ev: CustomEvent) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

  

}
