import { Input,Component, OnInit } from '@angular/core';
import {HelpiApiService} from 'src/app/services/helpi-api.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Array<any> = [];
  constructor(private helpiApi: HelpiApiService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.helpiApi.getAllGames().subscribe((data: { games: any[]; }) => this.games = data['games']);
  }

  navigateToGameMenu(id: number){
    this.router.navigate([`/games/${id}`])
      .then(() => console.log('Navigated to Game Menu'));
  }


}
