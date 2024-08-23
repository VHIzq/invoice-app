import { AbstractControl, ValidationErrors } from '@angular/forms';

export namespace FormValidators {
  export function confirmPassword(
    control: AbstractControl
  ): ValidationErrors | null {
    const isPasswordsMatches =
      control.value.password === control.value.confirmPassword
        ? null
        : { PasswordNoMatch: true };
    console.log({ isPasswordsMatches });
    return isPasswordsMatches;
  }
}