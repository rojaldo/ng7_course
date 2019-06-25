import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alcohol'
})
export class AlcoholPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value === 'number') {
      const inte = Math.floor(value);
      const dec = Math.round((value % 1) * 100);
      return inte + ',' + dec;
    } else {
      console.error('Wrong type for alcohol pipe: ' + typeof value);
      return value;
    }
    return value + '%';
  }

}
