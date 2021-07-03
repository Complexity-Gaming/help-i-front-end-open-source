// auth.service.ts
// Authentication Service

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = 'https://hep-i-api.herokuapp.com/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(AUTH_API + 'sign-in', JSON.stringify({
      username: credentials.username,
      password: credentials.password
    }), httpOptions);
  }

}
