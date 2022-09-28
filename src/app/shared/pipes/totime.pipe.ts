import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totime'
})
export class TotimePipe implements PipeTransform {

  transform(value: number): string {
    let sc = value % 60;
    let mn = Math.floor(value/60)
    return ((mn< 10) ? '0' : '')+ mn + ' minutes ' + ((sc <10) ? '0' : '') + sc + ' secondes'
  }

}
