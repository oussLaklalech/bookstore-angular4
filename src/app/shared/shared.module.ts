import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookService} from './book.service';
import { UpperCaseDirective } from './directives/upper-case.directive';
import {HttpClientModule} from '@angular/common/http';
import { ReverseStringPipe } from './pipes/reverse-string.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [UpperCaseDirective, ReverseStringPipe],
  providers: [BookService],
  exports: [UpperCaseDirective, ReverseStringPipe]
})
export class SharedModule { }
