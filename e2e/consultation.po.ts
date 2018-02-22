import { browser, by, element } from 'protractor';

export class ConsultationPage {
  navigateTo() {
    return browser.get('/consultation');
  }

  getNumberOfBooks() {
    return element(by.css('app-book-store ul')).all(by.tagName('li')).getSize();
  }
}
