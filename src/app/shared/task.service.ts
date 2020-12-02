import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs"; // 1:03:47

export interface Task { // 59:50,59:58
  id?: string; // 1:00:08
  title: string; // 59:54
  date?: string; // 1:00:30
}

@Injectable({
  providedIn: 'root', // 58:21
})
export class TaskService { // 58:28
  public static url: string = 'https://angular-practice-calenda-eb9df.firebaseio.com/tasks'; // 58:40

  constructor(private http: HttpClient) { // 59:13
    //
  }

  create(task: Task): Observable<Task> { // 59:44
    return this.http
      .post<any>(`${TaskService.url}/${task.date}.json`, task)
      .pipe(map(response => {
        console.log('Response:', response)
        return response; // 1:02:08
      }))
  }
}