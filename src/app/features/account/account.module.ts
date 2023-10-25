import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { ReservationsService } from '../reservation/services/reservations.service';
import { UiModule } from '@ui/ui.module';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, ProfileComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    UiModule,
    HttpClientModule
  ],
  providers: [AuthService, ReservationsService], 
})
export class AccountModule { }
