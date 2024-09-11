import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  inputValue: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  async submitEmail() {
    // Basic email format validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(this.inputValue)) {
      const alert = await this.alertController.create({
        header: 'Validation Error',
        message: 'Please enter a valid email address.',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
      return;
    }

    // If email is valid, show a success toast
    const toast = await this.toastController.create({
      message: 'Email sent successfully!',
      duration: 2000,
      position: 'top',
      cssClass: 'success-toast'
    });
    await toast.present();

    // Optionally, navigate to another page or clear the input
    // this.router.navigate(['/next-page']);
    this.inputValue = ''; // Clear the input field if needed
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
