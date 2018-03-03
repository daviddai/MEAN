import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ToggleService } from './shared/toggle-service.service';

import { routing } from './app.routes';

import { JwtInterceptor } from './interceptors/jwt-interceptor';
import {CanActivateUser} from './router-guards/can-activate-user';
import { UserRegisterComponent } from './components/user-register/user-register.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HomeComponent,
    HeaderComponent,
    SideBarComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbCollapseModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ToggleService,
    CanActivateUser,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
