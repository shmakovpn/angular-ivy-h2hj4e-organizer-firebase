// added manually 19:28
import { Injectable } from "@angular/core";
import * as moment from 'moment'; // 20:06
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root' // 19:35
})
export class DateService {
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment()) // 20:28, 20:38, 20:45
}