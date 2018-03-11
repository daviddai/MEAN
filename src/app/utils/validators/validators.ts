import {AbstractControl, FormControl, FormGroup, ValidatorFn} from '@angular/forms';

export function emailFormatValidator(): ValidatorFn {
  const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (control: AbstractControl): {[key: string]: any} => {
    const isValid = EMAIL_REGEXP.test(control.value);
    // 'invalidEmail' will be used in *ngIf="email.errors.invalidEmail"
    // to show message when email format is incorrect
    return isValid ? null : {'invalidEmailFormat': {value: control.value}};
  };
}

export function confirmPasswordValidator(getPasswordFn): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    if (control.value === '') {
      return null;
    }
    return getPasswordFn() !== control.value ? {'inconsistentPassword': {value: control.value}} : null;
  };
}
