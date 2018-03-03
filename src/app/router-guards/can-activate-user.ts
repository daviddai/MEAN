import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class CanActivateUser implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('CanActivateUser is called');

    if (localStorage.getItem('user') == null) {
      console.log('User is not login, redirect to login page');
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }

}
