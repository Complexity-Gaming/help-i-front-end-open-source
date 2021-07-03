import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./pages/home/home.component";
import { GamesComponent } from "./pages/games/games.component";
import { GameComponent } from "./pages/game/game.component";
import { AboutComponent } from "./pages/about/about.component";
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {ExpertsComponent} from "./pages/experts/experts.component";
import {ExpertComponent} from "./pages/expert/expert.component";
import {MaterialsComponent} from "./pages/materials/materials.component";
import {MaterialComponent} from "./pages/material/material.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {ApplicationComponent} from "./pages/application/application.component";
import {ApplicationsComponent} from "./pages/applications/applications.component";

import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', component: GamesComponent},
  { path: 'games', component: GamesComponent },
  { path: 'games/new', component: GameComponent },
  { path: 'games/:id', component: GameComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'game/:id/experts', component: ExpertsComponent },
  { path: 'expert/:id', component: ExpertComponent },
  { path: 'game/:id/materials', component: MaterialsComponent },
  { path: ':id/material', component: MaterialComponent },
  {path:'profile', component:ProfileComponent},
  {path:':id/applications', component:ApplicationsComponent},
  {path:':id/application', component:ApplicationComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
