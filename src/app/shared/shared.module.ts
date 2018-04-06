import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookService} from './book.service';
import { UpperCaseDirective } from './directives/upper-case.directive';
import {HttpClientModule} from '@angular/common/http';
import { ReverseStringPipe } from './pipes/reverse-string.pipe';
import { ExampleReactiveFormComponent } from './components/example-reactive-form/example-reactive-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TemplateFormComponent } from './components/template-form/template-form.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UpperCaseDirective, ReverseStringPipe, ExampleReactiveFormComponent, TemplateFormComponent],
  providers: [BookService],
  exports: [UpperCaseDirective, ReverseStringPipe, ExampleReactiveFormComponent, TemplateFormComponent]
})
export class SharedModule { }
