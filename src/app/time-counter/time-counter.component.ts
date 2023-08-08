import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
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

  /**
   *  TODO: Define a return value "counter" so it can send information back to where the time-counter is used
   */

  constructor() {
    this.counterMessage = {
      text: 'Counter',
      severity: Severity.WARN,
    } as Message;

    /**
     * TODO: Make sure that before the component is unloaded we clear the interval
     */
    this.counterId = window.setInterval(() => {
      console.log(this.counterId, this.iterationCount);
      this.iterationCount += 1;
      this.counterMessage = {
        text: `Counter ${this.iterationCount}`,
        severity: Severity.WARN,
      } as Message;

      /**
       *  TODO: Return the current timestamp in the "counter"
       */

      if (this.iterationCount > 100) {
        window.clearInterval(this.counterId);
      }
    }, 1000);
  }
}
