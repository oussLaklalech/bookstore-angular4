import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Book} from '../../shared/book';
import {BookService} from '../../shared/book.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.route.paramMap
      .filter((params: ParamMap) => +params.get('id') !== 0)
      .switchMap((params: ParamMap) => {
        return this.bookService.getBookById(+params.get('id'));
      }).subscribe((book: Book) => this.book = book);
  }

}
