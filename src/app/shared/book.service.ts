import { Injectable } from '@angular/core';
import {Book} from './book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class BookService {

  constructor(private http: HttpClient) {
  }

  /**
   *
   * @returns {Book[]}
   */
  getBooks(): Observable<Book[]> {
    return this.http.get('/api/books').map((books: Book[]) => {
      return books.map((book) => {
        (book.title = `Titre : ${book.title}`)
        return book;
        }
      );
      /*
      UNE AUTRE FACON DE FAIRE pretty cool :
      return books.map((book) => ({... book, title: `Titre : ${book.title}`}));*/
    });
  }

  /**
   *
   * @param id
   * @returns {Observable<>}
   */
  getBookById(id): Observable<Book> {
    return this.http.get(`/api/books/${id}`).map((book: Book) => this.transformBook(book));
  }

  transformBook(book: Book): Book {
    book.title = `TitreXX : ${book.title}`;
    return book;
  }
  /**
   *
   * @returns {Book}
   */
  getBook(): Book {
    return new Book('Les misérables', 'Victor Hugo');
  }

  /**
   *
   * @param {Book} newBook
   */
  addBook(newBook: Book): Observable<Book> {
    return this.http.post('/api/books', newBook);
  }
}
