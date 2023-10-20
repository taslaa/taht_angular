import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BaseService {
  private baseUrl = 'https://localhost:7115/api';

  constructor(private http: HttpClient) { }

  private handleApiResponse(response: any): any {
    if (response.status >= 200 && response.status < 300) {
      return {
        isSuccess: true,
        isError: false,
        isValidationError: false,
        data: response.body,
        error: null,
        validationErrors: null,
      };
    }
  }

  private handleExceptionApiResponse(error: HttpErrorResponse): any {
    console.error(error);

    if (error.status === 400) {
      return {
        isSuccess: false,
        isError: false,
        isValidationError: true,
        data: null,
        error: null,
        validationErrors: error.error.errors,
      };
    } else {
      return {
        isSuccess: false,
        isError: true,
        isValidationError: false,
        data: null,
        error: 'INTERNAL_SERVER_ERROR',
        validationErrors: null,
      };
    }
  }

  get(url: string, config?: any): Observable<any> {
    return this.http.get(this.baseUrl + url, { params: config }).pipe(
      catchError((error) => {
        const response = this.handleExceptionApiResponse(error);
        return throwError(response);
      })
    );
  }

  getById(url: string, config?: any): Observable<any> {
    return this.http.get(this.baseUrl + url, { params: config }).pipe(
      catchError((error) => {
        const response = this.handleExceptionApiResponse(error);
        return throwError(response);
      })
    );
  }

  getPaged(url: string, searchObject = {}): Observable<any> {
    return this.http.get(this.baseUrl + url, { params: searchObject }).pipe(
      catchError((error) => {
        const response = this.handleExceptionApiResponse(error);
        return throwError(response);
      })
    );
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(this.baseUrl + url, data).pipe(
      catchError((error) => {
        const response = this.handleExceptionApiResponse(error);
        return throwError(response);
      })
    );
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(this.baseUrl + url, data).pipe(
      catchError((error) => {
        const response = this.handleExceptionApiResponse(error);
        return throwError(response);
      })
    );
  }

  delete(url: string, config?: {}): Observable<any> {
    const params = new HttpParams({ fromObject: config });
    return this.http.delete(this.baseUrl + url, { params }).pipe(
      catchError((error) => {
        const response = this.handleExceptionApiResponse(error);
        return throwError(response);
      })
    );
  }

}
