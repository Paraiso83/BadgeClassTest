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
    const severity = this.getColor();
    this.message1 = { severity, text: value };
  }
  set text2(value: string) {
    const severity = this.getColor();
    this.message2 = { severity, text: value };
  }
  set text3(value: string) {
    const severity = this.getColor();
    this.message3 = { severity, text: value };
  }
  set text4(value: string) {
    const severity = this.getColor();
    this.message4 = { severity, text: value };
  }
  set text5(value: string) {
    const severity = this.getColor();
    this.message5 = { severity, text: value };
  }
  set text6(value: string) {
    this.message6 = { severity: null, text: value };
  }
  set text7(value: string) {
    this.message7 = { severity: undefined, text: value };
  }

  readonly colors = [
    Severity.ERROR,
    Severity.WARN,
    Severity.FATAL,
    Severity.INFO,
    Severity.SUCCESS,
  ];
  private getColor(): Severity {
    return this.colors[Math.floor(Math.random() * 10) / 2];
  }

  @HostListener('mouseover', ['$event.target']) onHover() {
    //do something
  }
}
