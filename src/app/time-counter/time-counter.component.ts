import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message, Severity } from '../badge/message.interface';

@Component({
  selector: 'my-time-counter',
  templateUrl: './time-counter.component.html',
  styleUrls: ['./time-counter.component.scss'],
})
export class TimeCounterComponent {
  counterMessage: Message;
  counterId: number;
  iterationCount: number = 0;
  constructor() {
    this.counterMessage = {
      text: 'Counter',
      severity: Severity.WARN,
    } as Message;

    this.counterId = window.setInterval(() => {
      console.log('abc');
      this.iterationCount += 1;
      if (this.iterationCount > 100) {
        window.clearInterval(this.counterId);
        /**
         *  Return the current timestamp in the counter output;
         */
        this.counter.emit(new Date().getTime());
      }
    }, 1000);
  }

  /**
   *  Define the counter so it can send information back to where the time-counter is used
   */
  @Output() counter = new EventEmitter<number>();
}
