import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SelectorComponent } from './selector/selector.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { MomentPipe } from './shared/moment.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    CalendarComponent, 
    SelectorComponent, 
    OrganizerComponent, 
    MomentPipe, // 23:11
  ], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
