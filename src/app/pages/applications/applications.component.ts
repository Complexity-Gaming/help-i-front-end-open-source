import { Component, OnInit } from '@angular/core';
import {HelpiApiService} from "../../services/helpi-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  applications: Array<any> = [];

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
    this.gamesApi.getApplicationsByPlayerId(id)
      .subscribe((response: any) =>{
        this.applications = response.content;
        console.log(response.content);
      })

  }

}
