import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  signInForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  decodeToken(token: string): any {
    try {
      const decodedToken = jwt_decode(token);
      console.log(token);
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token', error);
      return null;
    }
  }

  navigateToSignUp() {
    this.router.navigate(['/account/sign-up']);
  }

  signIn() {
    if (this.signInForm.valid) {
      const email = this.signInForm.get('email')?.value;
      const password = this.signInForm.get('password')?.value;

      this.authService.signIn(email, password).subscribe(
        (response: any) => {
          const tokenValue = response.token; 
          localStorage.setItem('token', tokenValue);
        },
        (error: any) => {
          this.errorMessage = 'Invalid email or password';
          this.signInForm.get('password')?.reset();
        }
      );
    }
  }
}
