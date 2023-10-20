import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../services/reservations.service';
import { AuthService } from '../../../account/services/auth.service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationData: any = {
    userId: null,
    serviceId: null,
    appointmentTime: '',
    reservationDate: new Date(),
    guestCount: 1,
  };
  services: any[] = [];
  appointmentTimes: string[] = [];

  constructor(
    private reservationService: ReservationsService,
    private authService: AuthService,
    private servicesService: ServicesService
  ) { }

  ngOnInit(): void {
    this.loadServices();

    this.initializeAppointmentTimes();
  }

  loadServices() {
    this.servicesService.getPaged('/Services/GetPaged')
      .subscribe(response => {
        this.services = response.items;
      });
  }

  initializeAppointmentTimes() {
    for (let hour = 8; hour <= 22; hour++) {
      this.appointmentTimes.push(`${hour}:00`);
    }
  }

  createReservation() {
    var userId = this.authService.getCurrentUser()?.userId;
    console.log(userId);
    this.reservationData.UserId = userId;

    this.reservationService.post('/Reservations', this.reservationData)
      .subscribe(response => {

      });
  }
}