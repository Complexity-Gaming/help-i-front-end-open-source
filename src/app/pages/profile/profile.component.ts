import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  user: any;
  constructor(private tokenStorageService: TokenStorageService, private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    if (this.currentUser) {
      this.userService.getUserByEmail(this.currentUser.username).subscribe(
        response => {
          console.log(response);
          this.user = response;
        },
        error => {
          console.log(error.error.errorMessage);
        });
    }
  }

  navigateToApplication(id: number): void{
    this.router.navigate([`${id}/application`])
      .then(() => console.log('Navigated to Application'));
  }

  navigateToApplications(id: number): void{
    this.router.navigate([`${id}/applications`])
      .then(() => console.log('Navigated to Applications'));
  }

  navigateToMaterial(id: number): void{
    this.router.navigate([`${id}/material`])
      .then(() => console.log('Navigated to Material'));
  }
}
