import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api: string = `${environment.api_server}/api/${environment.api_version}`;

  constructor(private http: HttpClient) {}

  public request(
    method: string,
    endPoint: string,
    headers: any,
    params?: any,
    body?: any
  ): Observable<any> {
    const url = `${this.api}/${endPoint}`;

    return this.http.request(method, url, {
      headers,
      params,
      body,
    });
  }
}
