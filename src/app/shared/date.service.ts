// added manually 19:28
import { Injectable } from "@angular/core";
// https://stackoverflow.com/questions/55131138/how-to-properly-import-momentjs-in-typescript-to-resolve-the-following-error-t?noredirect=1&lq=1 
import moment from 'moment'; // 20:06
import { BehaviorSubject } from "rxjs";
export default moment;

@Injectable({
  providedIn: 'root' // 19:35
})
export class DateService {
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment()) // 20:28, 20:38, 20:45

  changeMonth(dir: number) {
    const value = this.date.value.add(dir, 'month'); // 25:53
    this.date.next(value); // 25:59
  }

  changeDate(date: moment.Moment) { // 45:34
    const value = this.date.value.set({
      date: date.date(), // 45:59
      month: date.month(), // 46:04
    });
    this.date.next(value); // 46:12
  }
}