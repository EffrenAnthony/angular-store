import {AbstractControl} from '@angular/forms';

export class MyValidators{
  // el metodo tiene que ser estatico para que podamos utilziarlo fuera
  static isPriceValid(control: AbstractControl): object{
    const value = control.value;
    // console.log(value);
    if (value > 10000){
      return {price_invalid: true};
    }
  }
}
