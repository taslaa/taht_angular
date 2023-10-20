import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      PhoneNumber: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
  }

  navigateToSignIn() {
    this.router.navigate(['/account/sign-in']); 
  }

  signUp() {
    if (this.signUpForm.valid) {
      const formData = new FormData();

      formData.append('FirstName', this.signUpForm.get('FirstName')!.value);
      formData.append('LastName', this.signUpForm.get('LastName')!.value);
      formData.append('Email', this.signUpForm.get('Email')!.value);
      formData.append('PhoneNumber', this.signUpForm.get('PhoneNumber')!.value);
      formData.append('Password', this.signUpForm.get('Password')!.value);

      this.authService.signUp(formData).subscribe(
        (response: any) => {
          this.router.navigate(['/account/sign-in']);
        },
        (error: any) => {
          this.errorMessage = 'Registration failed';
        }
      );
    }
  }
}
