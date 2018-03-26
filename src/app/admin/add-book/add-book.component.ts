import { Component, OnInit } from '@angular/core';
import {Book} from '../../shared/book';
import {BookService} from '../../shared/book.service';
import {Router} from '@angular/router';
import {AppConstants} from "../../shared/constants/AppConstants";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = new Book('', '');
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.book);
    this.bookService.addBook(this.book).subscribe(() => {
      this.router.navigate(['/consultation']);
    });
  }

  getMessageConfirmation() {
    return AppConstants.DEFAULT_MSG_OK;
  }
}
