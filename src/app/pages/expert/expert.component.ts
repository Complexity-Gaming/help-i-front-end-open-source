import { Component, OnInit } from '@angular/core';
import {HelpiApiService} from "../../services/helpi-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css']
})
export class ExpertComponent implements OnInit {

  expert: any;

  constructor(private gamesApi: HelpiApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params =>{
      if (params.id){
        const id = params.id;
        console.log(id);
        this.retrieveExpert(id);
        console.log(this.expert);
      }
    })
  }

  retrieveExpert(id: number): void{
    this.gamesApi.getExpertById(id)
      .subscribe((response: any) =>{
        this.expert = response;
        console.log(response);
      })

  }

}
