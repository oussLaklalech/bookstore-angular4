export class AlertMessage {
  text: string;
  type?: 'default' | 'danger' | 'success' | 'warning';

  constructor(txt: string, type: 'default' | 'danger' | 'success' | 'warning') {
    this.text = txt;
    this.type = type;
  }
}
