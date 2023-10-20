import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReservationsService } from './services/reservations.service';
import { ReservationComponent } from './components/reservation/reservation.component';
import { AuthService } from '../account/services/auth.service';
import { ServicesService } from './services/services.service';


@NgModule({
  declarations: [
    ReservationComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ReservationsService, AuthService, ServicesService],
})
export class ReservationModule { }
