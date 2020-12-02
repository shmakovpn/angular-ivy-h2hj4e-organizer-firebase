import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root', // 58:21
})
export class TaskService { // 58:28
  public static url: string = 'https://angular-practice-calenda-eb9df.firebaseio.com/tasks'; // 58:40

  constructor(private http: HttpClient) { // 59:13
    //
  }
}