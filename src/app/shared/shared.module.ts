import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookService} from './book.service';
import { UpperCaseDirective } from './directives/upper-case.directive';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [UpperCaseDirective],
  providers: [BookService],
  exports: [UpperCaseDirective]
})
export class SharedModule { }
