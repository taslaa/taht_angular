import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  isLandingPage: boolean = false;
  isAccountPage: boolean = false;
  routeUrl: string = ''; // Store the route URL

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLandingPage = event.url === '/landing/landing';
        this.isAccountPage = event.url.startsWith('/account');
        this.isLoggedIn = !!localStorage.getItem('token');
        this.routeUrl = event.url;
      }
    });
  }

  ngOnInit() { }

  shouldShowHeader(): boolean {
    const allowedUrl = '/account/profile';
    return this.routeUrl === allowedUrl;
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate(['/landing/landing']);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
