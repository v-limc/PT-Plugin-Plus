export interface LogItem {
  id: string;
  time: number;

  event?: string;
  msg?: string;
  data?: any;
}

export type timezoneOffset = `${'UTC' | ''}${'-' | '+'}${number}`