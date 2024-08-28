import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appErrorMessageFriendly',
  standalone: true,
})
export class ErrorMessageFriendlyPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('/').pop()?.split('-').map(word => word.toLocaleUpperCase()).join(' ') ?? '';
  }
}
