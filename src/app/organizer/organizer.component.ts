// ng g c organizer --skipTests 14:09

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateService } from '../shared/date.service';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {

  public form: FormGroup; // 54:08

  constructor(public dateService: DateService) { // 52:23, I changed privato to public
    // 
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required), // 54:39
    })
  }
  
  submit() {
    const {title} = this.form.value; // 55:38
    console.log(title);
  }
}