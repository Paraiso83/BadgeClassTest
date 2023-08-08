import { Component, HostListener, Input, VERSION } from '@angular/core';
import { Message, Severity } from './badge/message.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
  lastText: string;

  constructor() {
    this.text1 = 'text1';
    this._text2 = 'text2';
    this._text3 = 'text3';
    this._text4 = 'text4';
    this.text5 = 'text5';
    this._text6 = 'text6';
  }

  /**
   * TODO: Find a solution to show in the first input (#lastBadgeText) the last message sent to a Badge
   */

  set text1(value: string) {
    this._text1 = value;
    const severity = this.getColor();
    this.message1 = { severity, text: value };
  }
  get text1() {
    return this._text1;
  }

  set text2(value: string) {
    const severity = this.getColor();
    this.message2 = { severity, text: value };
  }
  get text2() {
    return this._text2;
  }
  set text3(value: string) {
    const severity = this.getColor();
    this.message3 = { severity, text: value };
  }
  get text3() {
    return this._text3;
  }
  set text4(value: string) {
    const severity = this.getColor();
    this.message4 = { severity, text: value };
  }

  set text5(value: string) {
    const severity = this.getColor();
    this._text5 = value;
    this.message5 = { severity, text: value };
  }
  get text5() {
    return this._text5;
  }
  set text6(value: string) {
    this.message6 = { severity: null, text: value };
  }
  get text6() {
    return this._text6;
  }
  set text7(value: string) {
    this._text7 = value;
    this.message7 = { severity: undefined, text: value };
  }
  get text7() {
    return this._text7;
  }

  readonly colors = [
    Severity.ERROR,
    Severity.WARN,
    Severity.FATAL,
    Severity.INFO,
    Severity.SUCCESS,
  ];
  private getColor(): Severity {
    return this.colors[Math.trunc(Math.random() * 5)];
  }

  @HostListener('mouseover', ['$event.target']) onHover() {
    //Nothing to do
  }
}
