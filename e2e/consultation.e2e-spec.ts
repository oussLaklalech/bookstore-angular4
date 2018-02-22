
import {ConsultationPage} from './consultation.po';

describe('bookstorefomation Consultation', () => {
  let page: ConsultationPage;

  beforeEach(() => {
    page = new ConsultationPage();
  });

  it('should display 6 books in the list', () => {
    page.navigateTo();
    expect(page.getNumberOfBooks()).toBe(1);
  });
});
