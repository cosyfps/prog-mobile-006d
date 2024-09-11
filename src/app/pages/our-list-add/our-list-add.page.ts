import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-our-list-add',
  templateUrl: './our-list-add.page.html',
  styleUrls: ['./our-list-add.page.scss'],
})
export class OurListAddPage implements OnInit {

  title: string = '';
  details: string = '';

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async submitForm() {
    if (!this.title.trim()) {
      const alert = await this.alertController.create({
        header: 'Validation Error',
        message: 'The title is required and must be at least one character long.',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
      return;
    }

    if (!this.details.trim()) {
      const alert = await this.alertController.create({
        header: 'Validation Error',
        message: 'The details are required and must be at least one character long.',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
      return;
    }

    // If form is valid, proceed with your logic
    console.log('Title:', this.title);
    console.log('Description:', this.details);

    // Optionally navigate or perform further actions
    // this.router.navigate(['/some-page']);
  }

  goToOurList() {
    this.router.navigate(['/our-list']);
  }
}
