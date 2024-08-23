import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appErrorMessageFriendly',
  standalone: true,
})
export class ErrorMessageFriendlyPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    //auth/invalid-credential
    
    return value;
  }

}
