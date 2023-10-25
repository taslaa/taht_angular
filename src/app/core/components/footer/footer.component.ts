import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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

  shouldShowFooter(): boolean {
    return !this.isLandingPage && !this.isAccountPage;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
