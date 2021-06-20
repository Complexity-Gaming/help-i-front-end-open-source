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

  constructor(private gamesApi: HelpiApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameId = Number(this.route.params.subscribe( params => {
      if (params.id) {
        const id = params.id;
        console.log(id);
        this.retrieveGame(id);
        return id;
      }
    }))
  }

  retrieveGame(id: number): void {
    this.gamesApi.getGameById(id)
      .subscribe((response: any) => {
        this.gameData = {} as Game;
        this.gameData = _.cloneDeep(response.resource);
        console.log(response);
        console.log(this.gameData)
      })
  }

}
