import { Injectable } from '@angular/core';
import {LoginUser} from '../models/login-user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserLoginService {

  constructor(private httpClient: HttpClient) {}

  public userLogin(loginUser: LoginUser): Observable<any> {
    return this.httpClient.post('http://localhost:3000/api/user/login', loginUser);
  }

}
