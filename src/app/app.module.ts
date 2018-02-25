import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import {ToggleService} from './shared/toggle-service.service';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HomeComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbCollapseModule,
    BrowserAnimationsModule
  ],
  providers: [ToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
