import { Component, Input, OnInit } from '@angular/core';
import { HelpiApiService } from '../../services/helpi-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Game} from "../../models/game";
import * as _ from 'lodash';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gameId!: number;
  gameData: Game = {} as Game;
  experts: Array<any> = [];
  trainingMaterials: Array<any> = [];

  constructor(private gamesApi: HelpiApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameId = Number(this.route.params.subscribe( params => {
      if (params.id) {
        const id = params.id;
        console.log(id);
        this.retrieveGame(id);
        this.retrieveExperts(id)
        this.retrieveTraining(id)
        return id;
      }
    }))
  }

  retrieveGame(id: number): void {
    this.gamesApi.getGameById(id)
      .subscribe((response: any) => {
        this.gameData = {} as Game;
        this.gameData = _.cloneDeep(response);
        console.log(response);
        console.log(this.gameData)
      })
  }

  retrieveExperts(id: number): void{
    this.gamesApi.getExpertsByGameId(id)
      .subscribe((response: any) =>{
        this.experts = response.content;
        console.log(response.content);
      })

  }

  retrieveTraining(id: number): void{
    this.gamesApi.getTrainingMaterialGameId(id)
      .subscribe((response: any) =>{
        this.trainingMaterials = response.content;
        console.log(response.content);
      })

  }

  navigateToExperts(id: number): void{
    this.router.navigate([`game/${id}/experts`])
      .then(() => console.log('Navigated to Experts'));
  }


  navigateToMaterials(id: number): void{
    this.router.navigate([`game/${id}/materials`])
      .then(() => console.log('Navigated to Materials'));
  }

  navigateToExpert(id: number): void{
    this.router.navigate([`expert/${id}`])
      .then(() => console.log('Navigated to Expert'));
  }
}
