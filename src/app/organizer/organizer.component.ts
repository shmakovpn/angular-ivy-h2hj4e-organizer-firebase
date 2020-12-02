// ng g c organizer --skipTests 14:09

import { Component, OnInit } from '@angular/core';
import { DateService } from '../shared/date.service';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {

  constructor(public dateService: DateService) { // 52:23, I changed privato to public
    // 
  }

  ngOnInit() {
  }
  
}