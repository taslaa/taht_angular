import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ReservationsService } from 'src/app/features/reservation/services/reservations.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userFirstName: string = '';
  userLastName: string = '';
  userEmail: string = '';
  reservations: any[] = [];

  constructor(
    private authService: AuthService,
    private reservationsService: ReservationsService,
  ) {}

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    this.userFirstName = currentUser.FirstName;
    this.userLastName = currentUser.LastName;
    this.userEmail = currentUser.Email;

    const userId = currentUser.Id;

    this.reservationsService.getReservationsByUser(userId).subscribe((reservations) => {
      this.reservations = reservations;
    });
  }
}
