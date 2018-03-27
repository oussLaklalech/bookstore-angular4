import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let newStr = '';
    for (let i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }
    return newStr;
  }

}
