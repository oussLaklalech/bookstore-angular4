import { Component, OnInit } from '@angular/core';
import {Book} from '../../shared/book';
import {BookService} from '../../shared/book.service';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent implements OnInit {

  books: Book[];
  selectedBook: Book;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  display(idBook: number) {
    this.bookService.getBookById(idBook).subscribe((book) => {
      this.selectedBook = book;
    });
  }
}
