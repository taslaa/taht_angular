import { Component } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  faCheck = faCheck; // Define the FontAwesome icon

  constructor(private router: Router) {} // Inject the Router

  navigateToProfile() {
    this.router.navigate(['/account/profile']); // Navigate to the profile screen
  }
}
