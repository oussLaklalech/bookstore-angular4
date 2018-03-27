import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddBookReactiveComponent } from './add-book-reactive/add-book-reactive.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorService} from '../shared/services/http-interceptor/http-interceptor.service';
import {SharedModule} from "../shared/shared.module";

const adminRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'add', component: AddBookComponent},
      { path: 'add-reactive', component: AddBookReactiveComponent},
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [HomeComponent, AddBookComponent, AddBookReactiveComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  exports: [AddBookReactiveComponent]
})
export class AdminModule { }
