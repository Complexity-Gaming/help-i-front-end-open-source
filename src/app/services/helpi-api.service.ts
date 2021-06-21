import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class HelpiApiService {

  constructor(private http: HttpClient) { }

  // Get Game by Id
  getGameById(id: number): any {
    return this.http.get(`https://hep-i-api.herokuapp.com/api/games/${id}`);
  }

  // Get Game Data
  getAllGames():any{
    return this.http.get(`https://hep-i-api.herokuapp.com/api/games?offset=0&pageNumber=0&pageSize=0&paged=true`);
  }
  }
