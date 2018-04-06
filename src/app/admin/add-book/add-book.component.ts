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

  constructor() { }

  ngOnInit() {
  }

}
