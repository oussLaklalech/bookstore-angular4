import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookService} from './book.service';
import { UpperCaseDirective } from './directives/upper-case.directive';
import {HttpClientModule} from '@angular/common/http';
import { ReverseStringPipe } from './pipes/reverse-string.pipe';
import { ExampleReactiveFormComponent } from './components/example-reactive-form/example-reactive-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [UpperCaseDirective, ReverseStringPipe, ExampleReactiveFormComponent],
  providers: [BookService],
  exports: [UpperCaseDirective, ReverseStringPipe, ExampleReactiveFormComponent]
})
export class SharedModule { }
