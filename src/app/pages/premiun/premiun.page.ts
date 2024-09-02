import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController

@Component({
  selector: 'app-premiun',
  templateUrl: './premiun.page.html',
  styleUrls: ['./premiun.page.scss'],
})
export class PremiunPage implements OnInit {

  constructor(private navCtrl: NavController) { } // Inyecta NavController en el constructor

  ngOnInit() {
  }

  close() {
    this.navCtrl.back(); // Navega hacia atrás
  }
}
