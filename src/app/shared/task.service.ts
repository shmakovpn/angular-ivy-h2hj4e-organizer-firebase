import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs"; // 1:03:47
import moment from "moment"; // 1:08:30

export interface Task { // 59:50,59:58
  id?: string; // 1:00:08
  title: string; // 59:54
  date?: string; // 1:00:30
}

interface CreateResponse { // 1:05:27
  name: string; // 1:05:31
}

@Injectable({
  providedIn: 'root', // 58:21
})
export class TaskService { // 58:28
  public static url: string = 'https://angular-practice-calenda-eb9df.firebaseio.com/tasks'; // 58:40

  constructor(private http: HttpClient) { // 59:13
    //
  }

  load(date: moment.Moment): Observable<Task[]> {
    return this.http
      .get<Task[]>(`${TaskService.url}/${date.format('DD-MM-YYYY')}.json`) // 1:08:46
      .pipe(map(tasks => {
        if(!tasks) {
          return []; // 1:09:10
        }
        return Object.keys(tasks).map(key => ({...tasks[key], id: key})); // 1:09:41
      }))
  }

  create(task: Task): Observable<Task> { // 59:44
    return this.http
      .post<CreateResponse>(`${TaskService.url}/${task.date}.json`, task) // 1:05:35
      .pipe(map(response => {
        // console.log('Response:', response)
        // return response; // 1:02:08
        return {...task, id: response.name}; // 1:06:07
      }))
  }

  remove(task: Task): Observable<void> { // 1:14:08,
    return this.http
      .delete<void>(`${TaskService.url}/${task.date}/${task.id}.json`); // 1:14:59
  }
}