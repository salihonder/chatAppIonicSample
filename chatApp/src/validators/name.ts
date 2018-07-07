import { FormControl } from '@angular/forms';

export class NameValidator {
  static isValid(control: FormControl) {
    const re =  /^[A-Za-z ]{2,20}$/.test(
      control.value
    );

    if (re) {
      return null;
    }

    return {
      invalidName: true,
    };
   
  }
}