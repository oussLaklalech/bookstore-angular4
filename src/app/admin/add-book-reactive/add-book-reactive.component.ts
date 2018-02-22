import { Component, OnInit } from '@angular/core';
import {BookService} from '../../shared/book.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Book} from '../../shared/book';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.css']
})
export class AddBookReactiveComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      author: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  onSubmit() {
    const newBook: Book = {
      title: this.bookForm.value.title as string,
      author: this.bookForm.value.author as string
    }
    this.bookService.addBook(newBook).subscribe(() => {
      this.router.navigate(['/consultation']);
    });
  }
}
