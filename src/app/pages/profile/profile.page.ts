import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showInfo(activity: string, color: string) {
    this.selectedActivity = activity;
    this.selectedColor = color;

    // Update title and description based on the selected activity
    switch (activity) {
      case 'bloom':
        this.selectedTitle = 'Bloom Together';
        this.selectedDescription = 'These activities help you nurture yourself and your relationship with gratitude and affirmation. Celebrate what you love about being yourself and being a couple!';
        break;
      case 'reflection':
        this.selectedTitle = 'Inner Reflection';
        this.selectedDescription = 'These activities focus on getting to know yourself. Self-reflection helps you understand what motivates you and how you can become the best version of yourself.';
        break;
      case 'future':
        this.selectedTitle = 'Future in Bloom';
        this.selectedDescription = 'These activities focus on looking ahead. Become a person and a couple that is always growing and finding new things to enjoy.';
        break;
      case 'roots':
        this.selectedTitle = 'Strong Roots';
        this.selectedDescription = 'These activities help you build communication and trust to discuss the topics that matter most. Making life decisions and navigating difficult times is easier when you know you have a solid foundation.';
        break;
    }
    
  }

  hideInfo() {
    this.selectedActivity = null;
  }

  goToSettings(){
    this.router.navigate(['/settings']);
  }
  
}
