import { Component, HostListener, Input, VERSION } from '@angular/core';
import { Message, Severity } from './badge/message.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private _text1: string;
  public message1: Message;
  private _text2: string;
  public message2: Message;
  private _text3: string;
  public message3: Message;
  private _text4: string;
  public message4: Message;
  private _text5: string;
  public message5: Message;
  private _text6: string;
  public message6: Message;
  private _text7: string;
  public message7: Message;

  set text1(value: string) {
    this.message1 = { severity: Severity.ERROR, text: value };
    console.log('value');
  }
  set text2(value: string) {
    this.message2 = { severity: Severity.INFO, text: value };
  }
  set text3(value: string) {
    this.message3 = { severity: Severity.SUCCESS, text: value };
  }
  set text4(value: string) {
    this.message4 = { severity: Severity.FATAL, text: value };
  }
  set text5(value: string) {
    this.message5 = { severity: Severity.WARN, text: value };
  }
  set text6(value: string) {
    this.message6 = { severity: null, text: value };
  }
  set text7(value: string) {
    this.message7 = { severity: undefined, text: value };
  }

  @HostListener('mouseover', ['$event.target']) onHover() {
    //do something
  }
}
