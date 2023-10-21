import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  constructor(private router: Router) { }

  sentences: string[] = [
    "Breathe in the urban charm of the city skyline.",
    "Watch the city come alive as the sun sets.",
    "A skyline of dreams and city lights awaits.",
    "Explore the bustling streets of the metropolis.",
    "Where every corner holds a new city adventure.",
    "The cityscape is a canvas of endless possibilities.",
    "From high above, the city tells its story.",
    "In the heart of the city, life pulsates with energy.",
    "A city view that leaves a lasting impression.",
  ];

  navigateToSignUp() {
    this.router.navigate(['/account/sign-up']);
  }

  navigateToSignIn() {
    this.router.navigate(['/account/sign-in']);
  }
  currentIndex: number = 0;
  displayedText: string = this.sentences[0]; // Initialize with the first sentence

  ngOnInit() {
    this.animateText();
  }

  animateText() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.sentences.length;
      this.displayedText = this.sentences[this.currentIndex];
    }, 3000); // Change the text every 3 seconds
  }
}
