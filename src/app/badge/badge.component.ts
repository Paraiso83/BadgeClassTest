import { Component, Input } from '@angular/core';
import { Message, Severity } from './message.interface';

@Component({
  selector: 'my-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  private _message: Message;
  color: string;

  @Input()
  set message(a: Message) {
    this._message = a;
    this.color = this.getClass(a);
  }

  get message() {
    return this._message;
  }

  /**
   * TODO: Remove the console.log, evalute the issue that exists and find a solution
   */

  getClass(message: Message) {
    console.log(message);
    if (message) {
      switch (message.severity) {
        case Severity.ERROR:
          return 'orange-message';
        case Severity.INFO:
          return 'blue-message';
        case Severity.SUCCESS:
          return 'green-message';
        case Severity.FATAL:
          return 'red-message';
        case Severity.WARN:
          return 'yellow-message';
        default:
          return 'grey-message';
      }
    }
    return 'grey-message';
  }
}
