import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Game } from '../../models/Game';
import { HelpiApiService } from '../../services/helpi-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-student',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @ViewChild('gameForm', { static: false })
  gameForm!: NgForm;
  isEditMode = false;
  gameId!: number;
  gameData: Game = {} as Game;
  defaultGame: Game = { id: 0, providerId: 0,name: '', providerName: '', storyLine: '', summary: '', coverUrl:'', coverHeight: 0, coverWidth:0};
  constructor(private helpiApi: HelpiApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.retrieveGame(this.gameId)
  }
  retrieveGame(id: number): void {
    this.helpiApi.getGameById(id)
      .subscribe((response: Game) => {
        this.gameData = {} as Game;
        this.gameData = _.cloneDeep(response);
        console.log(response);
        console.log(this.gameData);
      });
  }
}
