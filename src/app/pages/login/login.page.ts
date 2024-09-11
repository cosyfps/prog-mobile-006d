import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Variables de usuario y contraseña
  User: string = '';
  Password: string = '';
  
  // Variables registradas que se recuperan al navegar desde el registro
  usuarioRegistro: string = '';
  contraRegistro: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private activedrouter: ActivatedRoute
  ) { 
    this.activedrouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        const state = this.router.getCurrentNavigation()?.extras.state as {
          rUser: string;
          rPassword: string;
        };
        this.usuarioRegistro = state.rUser;
        this.contraRegistro = state.rPassword;
      }
    });
  }

  ngOnInit() {}

  async login() {
    // Validation for empty fields
    if (this.User === '' || this.Password === '') {
      const alert = await this.alertController.create({
        header: 'Empty Fields',
        message: 'Please fill in all fields.',
        buttons: ['OK'],
        cssClass: 'alert-style'
      });
      await alert.present();
    }
    // Registered credentials validation
    else if (this.User === this.usuarioRegistro && this.Password === this.contraRegistro) {
      let navigationExtras: NavigationExtras = {
        state: {
          usu: this.usuarioRegistro,
          con: this.contraRegistro
        }
      };
      this.router.navigate(['/today'], navigationExtras);
    } 
    // Incorrect credentials error
    else {
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Incorrect username or password.',
        buttons: ['OK'],
        cssClass: 'alert-style'
      });
      await alert.present();
    }
  }
  

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  signUp() {
    this.router.navigate(['/register']);
  }
}
