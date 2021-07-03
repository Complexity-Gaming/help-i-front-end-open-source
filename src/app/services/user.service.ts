// user.service.ts
// Users Resource API Middleware

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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


  getUserById(t: string, id: string): Observable<any> {
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvQGhvdG1haWwuY29tIiwiZXhwIjoxNjI1MzEyNDY4LCJpYXQiOjE2MjUyOTQ0Njh9.ibA5LZf0h8ZVvXk9NvlXV36hufk8GxZoBJU1K0_FSUp_urKV7VrAmYFXCj746BcXYh7pduOo1GYafcYmFz9rCg");
    return this.http.get(`https://hep-i-api.herokuapp.com/api/players/1`, {headers: headers_object});
  }
}
