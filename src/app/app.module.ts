import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BadgeComponent } from './badge/badge.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, BadgeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
