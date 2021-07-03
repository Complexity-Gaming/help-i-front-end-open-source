import { Component, OnInit } from '@angular/core';
import {HelpiApiService} from "../../services/helpi-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Game} from "../../models/game";
import * as _ from "lodash";

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent implements OnInit {

  gameId!: number;
  gameData: Game = {} as Game;
  experts: Array<any> = [];

  constructor(private gamesApi: HelpiApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameId = Number(this.route.params.subscribe( params => {
      if (params.id) {
        const id = params.id;
        console.log(id);
        this.retrieveGame(id);
        this.retrieveExperts(id)
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

  navigateToExpert(id: number): void{
    this.router.navigate([`expert/${id}`])
      .then(() => console.log('Navigated to Expert'));
  }

}
