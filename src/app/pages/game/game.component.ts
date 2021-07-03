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

  navigateToExperts(): void{
    this.router.navigate([`/experts`])
      .then(() => console.log('Navigated to Experts'));
  }


  navigateToMaterials(): void{
    this.router.navigate([`/materials`])
      .then(() => console.log('Navigated to Materials'));
  }


}
