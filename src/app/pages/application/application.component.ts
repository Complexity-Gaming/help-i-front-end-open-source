import { Component, OnInit } from '@angular/core';
import {HelpiApiService} from "../../services/helpi-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Application} from "../../models/application";
import application from "@angular-devkit/build-angular/src/babel/presets/application";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  application: Application = {} as Application
  playerId!: number;

  constructor(private gamesApi: HelpiApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.playerId = Number(this.route.params.subscribe( params => {
    }))
    console.log(this.playerId);
  }

  // @ts-ignore
  onSubmit(data){
    this.application.tittle.applicationId = data.tittle;
    this.application.applicationDetails.videoApplication = data.videoApplication;
    this.application.applicationDetails.description = data.description;
    this.gamesApi.postPlayerApplication(this.application, this.playerId)
  }


}
