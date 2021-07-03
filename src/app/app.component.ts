// app.component.ts
// Main Application View
import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './services/token-storage.service';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HelpIFrontEndOpenSource';
  private roles: string[] | undefined;
  isLoggedIn = false;
  username: string | undefined;
  currentUser: any;
  user: any;
  constructor(private tokenStorageService: TokenStorageService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
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
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
