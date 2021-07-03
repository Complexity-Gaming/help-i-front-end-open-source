import { Component, OnInit } from '@angular/core';
import {HelpiApiService} from "../../services/helpi-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  materials: Array<any> = [];

  constructor(private gamesApi: HelpiApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params =>{
      if (params.id){
        const id = params.id;
        console.log(id);
        this.retrieveApplications(id)
      }
    })
  }

  retrieveApplications(id: number): void{
    this.gamesApi.getTrainingsByPlayerId(id)
      .subscribe((response: any) =>{
        this.materials = response.content;
        console.log(response.content);
      })

  }
}
