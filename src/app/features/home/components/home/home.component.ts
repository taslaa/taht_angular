import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dynamicText: string = "Breathe in the urban charm of the city skyline.";
  sentences: string[] = [
    "Breathe in the urban charm of the city skyline.",
    "Watch the city come alive as the sun sets.",
    "A skyline of dreams and city lights awaits.",
    "Explore the bustling streets of the metropolis.",
    "Where every corner holds a new city adventure.",
    "The cityscape is a canvas of endless possibilities.",
    "From high above, the city tells its story.",
    "In the heart of the city, life pulsates with energy.",
    "A city view that leaves a lasting impression."
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    let index = 0;

    setInterval(() => {
      this.dynamicText = this.sentences[index];
      index = (index + 1) % this.sentences.length;
    }, 3000);
  }

  navigateToReservation() {
    this.router.navigate(['/reservation/reservation']);
  }
}
