import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  howToUsePipe = '{{ \'ceci est un texte en reverse\' | reverseString }}';
  constructor() { }

  ngOnInit() {
  }

}
