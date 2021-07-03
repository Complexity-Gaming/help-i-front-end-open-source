import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {Application} from "../models/application";

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

  //Get Experts By Id of Game
  getExpertsByGameId(gameId:number): any {
    return this.http.get(`https://hep-i-api.herokuapp.com/api/games/${gameId}/experts?offset=0&pageNumber=0&pageSize=0&paged=true`);
  }

  getTrainingMaterialGameId(gameId:number):any{
    return this.http.get(`https://hep-i-api.herokuapp.com/api/games/${gameId}/trainings?offset=0&pageNumber=0&pageSize=0&paged=true`);
  }

  postPlayerApplication(application:Application, playerId:number): any{
    return this.http.post(`https://hep-i-api.herokuapp.com/api/players/${playerId}/applications`, {
      tittle: application.tittle,
      applicationDetails: application.applicationDetails
    })
  }

  getApplicationsByPlayerId(playerId:number): any {
    return this.http.get(`https://hep-i-api.herokuapp.com/api/players/${playerId}/applications?offset=0&pageNumber=0&pageSize=0&paged=true`);
  }

  getTrainingsByPlayerId(playerId:number): any {
    return this.http.get(`https://hep-i-api.herokuapp.com/api/players/${playerId}/trainings?offset=0&pageNumber=0&pageSize=0&paged=true`);
  }

  getExpertById(expertId: number): any{
    return this.http.get(`https://hep-i-api.herokuapp.com/api/experts/${expertId}`);
  }

  postPlayerTrainingMaterial(playerId:number, trainingId: number): any{
    return this.http.post(`https://hep-i-api.herokuapp.com/api/players/${playerId}/trainings/${trainingId}`, {})
  }

}
