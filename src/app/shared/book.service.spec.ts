import { TestBed, inject } from '@angular/core/testing';

import { BookService } from './book.service';
import {Book} from './book';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

fdescribe('BookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));

  /*it('should add "titre :" before title of book', inject([BookService], (service: BookService) => {
    let listBooks: Book[] = new Array();
    listBooks.push(new Book('test title', 'test author'));
    listBooks.push(new Book('test title2', 'test author2'));
    service.getBooks().subscribe((books: Book[]) => {
        listBooks = books;
    });
    expect(listBooks[0].title).toEqual('Titre : test title');
  }));*/

  it('should add "TitreXX :" before title of book',
    inject([BookService, HttpTestingController], (service: BookService, httpMock: HttpTestingController) => {
    service.getBookById(1).subscribe( (book: Book) =>
      expect(book.title).toBe('TitreXX : GERMINAL')
    );
    const req = httpMock.expectOne('/api/books/1');
    expect(req.request.method).toEqual('GET');
    /* FLUSH / PERMET DE SIMULER L'APPEL WS */
    req.flush({title: 'GERMINAL'});
  }));
});
