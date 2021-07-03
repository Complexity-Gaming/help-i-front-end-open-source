import { Component, OnInit } from '@angular/core';
import {HelpiApiService} from "../../services/helpi-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Game} from "../../models/game";
import * as _ from "lodash";

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  gameId!: number;
  gameData: Game = {} as Game;
  trainingMaterials: Array<any> = [];

  constructor(private gamesApi: HelpiApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameId = Number(this.route.params.subscribe( params => {
      if (params.id) {
        const id = params.id;
        console.log(id);
        this.retrieveGame(id);
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

  retrieveTraining(id: number): void{
    this.gamesApi.getTrainingMaterialGameId(id)
      .subscribe((response: any) =>{
        this.trainingMaterials = response.content;
        console.log(response.content);
      })

  }
}
