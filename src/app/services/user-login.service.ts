import { Injectable } from '@angular/core';
import {LoginUser} from '../models/login-user';

@Injectable()
export class UserLoginService {

  constructor() {}

  public userLogin(loginUser: LoginUser) {
    console.log(JSON.stringify(loginUser));
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve('done');
      }, 4000);
    });
  }

}
