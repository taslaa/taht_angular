import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ServicesService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  override get(url: string, config?: any): Observable<any> {
    return super.get(url, config);
  }

  override getById(url: string, config?: any): Observable<any> {
    return super.getById(url, config);
  }

  override getPaged(url: string, searchObject = {}): Observable<any> {
    return super.getPaged(url, searchObject);
  }

  override post(url: string, data: any): Observable<any> {
    return super.post(url, data);
  }

  override put(url: string, data: any): Observable<any> {
    return super.put(url, data);
  }

  override delete(url: string, config?: {}): Observable<any> {
    return super.delete(url, config);
  }
}
