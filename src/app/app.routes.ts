import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: UserLoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
