import { FormGroup } from '@angular/forms';

export namespace FormValidators {
  export function passwordsMatch(field1: any, field2: any) {
    return (group: FormGroup) => {
      const password = group.controls[field1].value;
      const confirmPassword = group.controls[field2].value;
  
      if (password !== confirmPassword) {
        return { mismatchedPasswords: true };
      }
  
      return null;
    };
  }
}