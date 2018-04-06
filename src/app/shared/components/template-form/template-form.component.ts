import { Component, OnInit } from '@angular/core';
import {Book} from '../../book';
import {BookService} from '../../book.service';
import {Router} from '@angular/router';
import {AppConstants} from '../../constants/AppConstants';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

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
