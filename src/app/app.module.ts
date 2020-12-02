import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SelectorComponent } from './selector/selector.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { MomentPipe } from './shared/moment.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, // 53:51
    ReactiveFormsModule, // 53:58
    HttpClientModule, // https://stackoverflow.com/questions/50282848/cant-find-angular-common-http-on-stackblitz
  ],
  declarations: [ 
    AppComponent, 
    CalendarComponent, 
    SelectorComponent, 
    OrganizerComponent, 
    MomentPipe, // 23:11
    HttpClientModule, // 59:24
  ], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
