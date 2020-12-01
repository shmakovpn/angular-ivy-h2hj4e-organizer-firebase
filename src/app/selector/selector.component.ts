// ng g c selector --skipTests 14:00

import { Component, OnInit } from '@angular/core';
import { DateService } from '../shared/date.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {

  constructor(private dateService: DateService) { } // 21:11
}