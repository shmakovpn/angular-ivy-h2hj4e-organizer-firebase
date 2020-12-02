
// ng g c calendar --skipTests 13:43
import { Component, OnInit } from '@angular/core';

// https://stackoverflow.com/questions/55131138/how-to-properly-import-momentjs-in-typescript-to-resolve-the-following-error-t?noredirect=1&lq=1
import moment from 'moment'; // 28:14
import { DateService } from '../shared/date.service';

interface Day { // 28:05
  value: moment.Moment; // 28:10
  active: boolean; // 28:28
  disabled: boolean; // 28:26
  selected: boolean; // 28:29
}

interface Week { // 27:55
  days: Day[]; // 27:59
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public calendar: Week[]; // 27:43

  constructor(private dateService: DateService) { // 29:04

  }

  ngOnInit() {
    this.dateService.date.subscribe(this.generate.bind(this)); // 29:47, 30:00
  }

  generate(now: moment.Moment) { // 30:29
    const startDay = now.clone().startOf('month').startOf('week'); // 31:35
    const endDay = now.clone().endOf('month').endOf('week'); // 31:44

    const date = startDay.clone().subtract(1, 'day'); // 32:13

    const calendar = []; // 32:21

    while (date.isBefore(endDay, 'day')) { // 32:45
      calendar.push({
        days: Array(7)
        .fill(0)
        .map(() => {
          const value = date.add(1, 'day').clone(); // 34:13
          const active = moment().isSame(value, 'date'); // 35:07
          const disabled = !now.isSame(value, 'month'); // 35:32
          const selected = now.isSame(value, 'date');// 35:52

          return {
            value, active, disabled, selected // 34:21? 36:02
          }
        })
      })
    }
    
    this.calendar = calendar // 
  }

}