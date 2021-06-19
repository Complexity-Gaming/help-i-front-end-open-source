import { Component, Input, OnInit } from '@angular/core';
import { HelpiApiService } from '../../services/helpi-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games: Array<any> = [];
  @Input() source: Array<any> = [];
  constructor(private gamesApi:HelpiApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }
}
