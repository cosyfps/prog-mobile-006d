import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  selectedActivity: string | null = null;
  selectedColor: string = '#3880ff'; // Default color
  selectedTitle: string = '';
  selectedDescription: string = '';

  constructor() { }

  ngOnInit() {
  }

  showInfo(activity: string, color: string) {
    this.selectedActivity = activity;
    this.selectedColor = color;

    // Update title and description based on the selected activity
    switch (activity) {
      case 'florecer':
        this.selectedTitle = 'Florece Juntos';
        this.selectedDescription = 'Estas actividades te ayudan a nutrirte a ti mismo y a tu relación con gratitud y afirmación. ¡Celebra lo que amas de ser tú y de ser pareja!';
        break;
      case 'reflejo':
        this.selectedTitle = 'Reflejo Interior';
        this.selectedDescription = 'Estas actividades se centran en conocerte a ti mismo. La autorreflexión te ayuda a entender qué te motiva y cómo puedes convertirte en la mejor versión de ti mismo.';
        break;
      case 'avance':
        this.selectedTitle = 'Futuro en Flor';
        this.selectedDescription = 'Estas actividades se enfocan en mirar hacia adelante. Conviértete en una persona y en una pareja que siempre está creciendo y encontrando nuevas cosas que disfrutar.';
        break;
      case 'raices':
        this.selectedTitle = 'Raíces Fuertes';
        this.selectedDescription = 'Estas actividades te ayudan a construir comunicación y confianza para discutir los temas que más importan. Tomar decisiones de vida y navegar tiempos difíciles es más fácil cuando sabes que tienes una base sólida.';
        break;
    }
  }

  hideInfo() {
    this.selectedActivity = null;
  }
  
}
