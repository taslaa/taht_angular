import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReservationsService } from './services/reservations.service';
import { ReservationComponent } from './components/reservation/reservation.component';
import { AuthService } from '../account/services/auth.service';
import { ServicesService } from './services/services.service';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ReservationComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [ReservationsService, AuthService, ServicesService],
})
export class ReservationModule { }
