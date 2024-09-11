import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  User: string = '';
  Email: string = '';
  Password: string = '';
  ConfirmPassword: string = '';

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {}

  async register() {
    // Define the password validation criteria
    const minLength = 8;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; // Regex to match special characters

    // Check if any fields are empty
    if (!this.User || !this.Email || !this.Password || !this.ConfirmPassword) {
      const alert = await this.alertController.create({
        header: 'Validation Error',
        message: 'All fields are required.',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
      return;
    }

    // Check password validation requirements
    const lengthValid = this.Password.length >= minLength;
    const upperCaseValid = hasUpperCase.test(this.Password);
    const lowerCaseValid = hasLowerCase.test(this.Password);
    const numberValid = hasNumber.test(this.Password);
    const specialCharInvalid = !hasSpecialChar.test(this.Password); // Password should not have special characters

    let errorMessage = '';

    if (!lengthValid) {
      errorMessage = 'Password must be at least 8 characters long.';
    } else if (!upperCaseValid) {
      errorMessage = 'Password must include at least one uppercase letter.';
    } else if (!lowerCaseValid) {
      errorMessage = 'Password must include at least one lowercase letter.';
    } else if (!numberValid) {
      errorMessage = 'Password must include at least one number.';
    } else if (!specialCharInvalid) {
      errorMessage = 'Password cannot contain special characters.';
    } else if (this.Password !== this.ConfirmPassword) {
      errorMessage = 'The passwords do not match. Please try again.';
    }

    // Show the appropriate alert based on the validation result
    if (errorMessage) {
      const alert = await this.alertController.create({
        header: 'Validation Error',
        message: errorMessage,
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
      return;
    }

    // If validation passes, navigate to login page with the registered data
    let navigationExtras: NavigationExtras = {
      state: {
        rUser: this.User,
        rPassword: this.Password
      }
    };

    this.router.navigate(['/login'], navigationExtras);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
