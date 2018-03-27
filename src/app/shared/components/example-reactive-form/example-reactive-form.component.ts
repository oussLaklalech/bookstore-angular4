import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../book.service';
import {Router} from '@angular/router';
import {Book} from '../../book';

@Component({
  selector: 'app-example-reactive-form',
  templateUrl: './example-reactive-form.component.html',
  styleUrls: ['./example-reactive-form.component.css']
})
export class ExampleReactiveFormComponent implements OnInit {

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
    };
    this.bookService.addBook(newBook).subscribe(() => {
      this.router.navigate(['/consultation']);
    });
  }

}
