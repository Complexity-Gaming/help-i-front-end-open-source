import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamesComponent } from './pages/games/games.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GameComponent } from './pages/game/game.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { HttpClientModule } from "@angular/common/http";
import {HelpiApiService} from "./services/helpi-api.service";
import {MatTooltipModule} from "@angular/material/tooltip";
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ExpertsComponent } from './pages/experts/experts.component';
import { MaterialsComponent } from './pages/materials/materials.component';
import { ExpertComponent } from './pages/expert/expert.component';
import { MaterialComponent } from './pages/material/material.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ApplicationComponent } from './pages/application/application.component';
import { ApplicationsComponent } from './pages/applications/applications.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    HomeComponent,
    AboutComponent,
    GameComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    ExpertsComponent,
    MaterialsComponent,
    ExpertComponent,
    MaterialComponent,
    ProfileComponent,
    ApplicationComponent,
    ApplicationsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        HttpClientModule,
        MatTooltipModule
    ],
  providers: [HelpiApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
