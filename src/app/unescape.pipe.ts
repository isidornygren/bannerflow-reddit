import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unescape'
})
export class UnescapePipe implements PipeTransform {

  transform(value: string | null, ...args: unknown[]): unknown {
    if(value){
      const doc = new DOMParser().parseFromString(value, 'text/html');
      return doc.documentElement.textContent;
    }
    return null;
  }
}