import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  private baseUrl = 'https://localhost:7115/api';
  private tokenKey = 'token';

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/Access/SignIn`, { email, password });
  }

  signUp(data: FormData): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.post(`${this.baseUrl}/Access/SignUp`, data, { headers });
  }

  signOut(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getCurrentUser(): any {
    const token = localStorage.getItem(this.tokenKey);
    const helper = new JwtHelperService();
    if (token) {
      const decodedToken = helper.decodeToken(token);
      console.log(decodedToken);
      return decodedToken;
    }
    return null;
  }
}
