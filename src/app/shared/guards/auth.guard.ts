import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(): boolean {
        const token = localStorage.getItem('token');
        console.log('Token:', token);

        if (token == null) {
            console.log('User is not logged in, redirecting to landing');
            return true;
        } else {
            this.router.navigate(['/reservation/reservation']);
            console.log('User is logged in');
            return false;
        }
    }
}
