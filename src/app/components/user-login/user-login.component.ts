import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../../models/login-user';
import { UserLoginService } from '../../services/user-login.service';
import { Router } from '@angular/router';

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

  constructor(private userLoginService: UserLoginService, private router: Router) {
    this.loginUser = new LoginUser();
    this.loginButtonText = this.LOG_IN;
    this.showSpinningWheel = false;
    this.disableLoginButton = false;
  }

  ngOnInit() {}

  public login() {
    this.preLogin();
    this.userLoginService.userLogin(this.loginUser).subscribe((response) => {
      if ('error' in response) {
        console.log(response['error']['message']);
        this.postLogin();
      } else {
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['']);
      }
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
