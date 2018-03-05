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
  private LOG_IN = 'Log in';
  private LOGGING_IN = 'Logging in';

  public loginUser: LoginUser;
  public loginButtonText: string;
  public showSpinningWheel: boolean;
  public disableLoginButton: boolean;

  constructor(private userLoginService: UserLoginService) {
    this.loginUser = new LoginUser();
    this.loginButtonText = this.LOG_IN;
    this.showSpinningWheel = false;
    this.disableLoginButton = false;
  }

  ngOnInit() {}

  public login() {
    this.preLogin();
    this.userLoginService.userLogin(this.loginUser).subscribe((result) => {
      console.log(result);
      this.postLogin();
    });
  }

  private preLogin() {
    this.loginButtonText = this.LOGGING_IN;
    this.showSpinningWheel = true;
    this.disableLoginButton = true;
  }

  private postLogin() {
    this.loginButtonText = this.LOG_IN;
    this.showSpinningWheel = false;
    this.disableLoginButton = false;
  }
}
