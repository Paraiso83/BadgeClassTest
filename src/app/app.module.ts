import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BadgeComponent } from './badge/badge.component';
import { TimeCounterComponent } from './time-counter/time-counter.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, BadgeComponent, TimeCounterComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
