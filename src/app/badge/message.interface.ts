export interface Message {
  severity: Severity;
  text: string;
}

export enum Severity {
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'success',
  FATAL = 'fatal',
  WARN = 'warn',
}
