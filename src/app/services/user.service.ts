// user.service.ts
// Users Resource API Middleware

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'https://hep-i-api.herokuapp.com/api/players?offset=0&pageNumber=0&pageSize=0&paged=true';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(API_URL);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(`https://hep-i-api.herokuapp.com/api/players/email/`+ id);
  }
}
