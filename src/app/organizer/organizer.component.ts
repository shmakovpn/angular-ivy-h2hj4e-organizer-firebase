// ng g c organizer --skipTests 14:09

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { DateService } from '../shared/date.service';
import { Task, TaskService } from '../shared/task.service';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {

  public form: FormGroup; // 54:08
  public tasks: Task[] = []; // 1:11:16

  constructor(public dateService: DateService, // 52:23, I changed private to public
    private taskService: TaskService) { // 1:02:32
    //  
  }

  ngOnInit() {
    this.dateService.date.pipe(
      switchMap(value => this.taskService.load(value)), // 1:10:56
    ).subscribe(tasks => {
      this.tasks = tasks; // 1:11:10
    });

    this.form = new FormGroup({
      title: new FormControl('', Validators.required), // 54:39
    })
  }
  
  submit() {
    const {title} = this.form.value; // 55:38
    const task: Task = {
      title, // 1:02:54
      date: this.dateService.date.value.format('DD-MM-YYYY'), // 1:03:12
    };

    this.taskService.create(task).subscribe( task => {
      // console.log('New task:', task); // 1:06:23
      this.tasks.push(task); // 1:13:51
      this.form.reset(); // 1:04:23
    }, err => console.error(err)); // 1:04:10
    // console.log(title);
  }

  remove(task: Task) { // 1:12:23
    this.taskService.remove(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id); // 1:15:43
    }, err => console.error(err)); // 1:15:07,1:15:21
  }
}