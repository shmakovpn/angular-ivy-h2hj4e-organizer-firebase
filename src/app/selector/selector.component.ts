// ng g c selector --skipTests 14:00

import { Component } from '@angular/core';
import { DateService } from '../shared/date.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {

  constructor(public dateService: DateService) { } // 21:11 !23:44=changed private to public

  go(dir: number) {
    this.dateService.changeMonth(dir); // 
  }

}