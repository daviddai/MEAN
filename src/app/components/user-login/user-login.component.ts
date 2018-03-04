import { Component, OnInit } from '@angular/core';
import {LoginUser} from '../../models/login-user';
import {UserLoginService} from '../../services/user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [UserLoginService]
})
export class UserLoginComponent implements OnInit {

  public loginUser: LoginUser;

  constructor(private userLoginService: UserLoginService) {
    this.loginUser = new LoginUser();
  }

  ngOnInit() {}

  public login() {
    this.userLoginService.userLogin(this.loginUser);
  }

}
