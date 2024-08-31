import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-not-found404',
  templateUrl: './not-found404.page.html',
  styleUrls: ['./not-found404.page.scss'],
})
export class NotFound404Page {

  constructor(private navCtrl: NavController) {}

  goToLogin() {
    this.navCtrl.navigateRoot('/login');  
  }

}
