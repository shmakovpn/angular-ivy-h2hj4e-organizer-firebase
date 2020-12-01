// 21:48
import { Pipe, PipeTransform } from '@angular/core';
// https://stackoverflow.com/questions/55131138/how-to-properly-import-momentjs-in-typescript-to-resolve-the-following-error-t?noredirect=1&lq=1
import moment from 'moment'; // 22:22

@Pipe({
  name: 'moment',
  pure: false // 25:36
})
export class MomentPipe implements PipeTransform {

  transform(m: moment.Moment, format: string = 'MMMM YYYY'): string { // 22:53
    return m.format(format); // 23:04
  }

}