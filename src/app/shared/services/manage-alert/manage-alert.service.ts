import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {AlertMessage} from '../../models/AlertMessage';

@Injectable()
export class ManageAlertService {

  private alertMessage: ReplaySubject<AlertMessage> = new ReplaySubject<AlertMessage>();

  constructor() {
    /* On spécifie le message par défaut */
    this.alertMessage.next(new AlertMessage('', 'default'));
  }

  /**
   * renvoie le message courant.
   * @returns {Observable<AlertMessage>}
   */
  getCurrentMessage() {
    return this.alertMessage.asObservable();
  }

  /**
   * Permet de changer le theme courant.
   * @param {AlertMessage} message
   */
  changeMessage(message: AlertMessage) {
    this.alertMessage.next(message);
  }
}
