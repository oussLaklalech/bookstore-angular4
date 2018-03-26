import { Component, OnInit } from '@angular/core';
import {Book} from '../../shared/book';
import {BookService} from '../../shared/book.service';
import {ManageAlertService} from '../../shared/services/manage-alert/manage-alert.service';
import {AlertMessage} from '../../shared/models/AlertMessage';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent implements OnInit {

  books: Book[];
  selectedBook: Book;
  alertMessage: AlertMessage;
  constructor(private bookService: BookService, private manageAlertService: ManageAlertService) {
    manageAlertService.getCurrentMessage().subscribe((msg) => {
      this.alertMessage = msg;
    });
  }

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
