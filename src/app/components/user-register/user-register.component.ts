import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterUser } from '../../models/register-user';
import { confirmPasswordValidator, emailFormatValidator } from '../../utils/validators/validators';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public registrationForm: FormGroup;
  public registerUser: RegisterUser;

  constructor(private router: Router) {
    this.registerUser = new RegisterUser();
  }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'name': new FormControl(this.registerUser.name, [
        Validators.required
      ]),
      'email': new FormControl(this.registerUser.email, [
        Validators.required,
        emailFormatValidator()
      ]),
      'password': new FormControl(this.registerUser.password, [
        Validators.required
      ]),
      'confirmPassword': new FormControl(this.registerUser.confirmPassword, [
        Validators.required,
        confirmPasswordValidator(() => {
          return this.registerUser.password;
        })
      ]),
    });
  }

  register() {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  get name() {
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  isInputInvalid(formControlName) {
    return this.registrationForm.get(formControlName).invalid;
  }

}
