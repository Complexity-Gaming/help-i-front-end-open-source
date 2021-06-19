import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class HelpiApiService {
  // Students Endpoint
  //basePath = 'https://help-i-api.azurewebsites.net/api';
  constructor(private http: HttpClient) { }
  // HTTP Default Options

// API Error Handling


  // Get Game by Id
  getGameById(id: number): any {
    return this.http.get(`https://help-i-api.azurewebsites.net/api/games/${id}`);
  }
  // Get Game Data
  getAllGames():any{
    return this.http.get(`https://help-i-api.azurewebsites.net/api/games`);
  }
  }
