import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../shared/book';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small => large', animate('100ms ease-in')),
    ]),
  ]
})
export class BookComponent implements OnInit {

  @Input('book')
  book: Book;

  @Input('isAnimate')
  isAnimate = false;

  @Output('displayBookEvent')
  displayBookEvent: EventEmitter<number> = new EventEmitter<number>();

  state = 'small';

  constructor() {
  }

  ngOnInit() {
  }

  animateMe() {
    if (this.isAnimate) {
      this.state = (this.state === 'small' ? 'large' : 'small');
      setTimeout(() => {
        this.state = (this.state === 'small' ? 'large' : 'small');
      }, 250);
    }
  }

  displayBookAction() {
    this.displayBookEvent.emit(this.book.id);
  }
}
