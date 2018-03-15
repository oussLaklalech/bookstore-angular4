import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import {SharedModule} from '../shared/shared.module';
import { BookStoreComponent } from './book-store/book-store.component';
import {RouterModule, Routes} from '@angular/router';
import { BookPageComponent } from './book-page/book-page.component';
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorService} from '../shared/services/http-interceptor/http-interceptor.service';

const consultationRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
        { path: '', component: BookStoreComponent},
        { path: 'book/:id', component: BookPageComponent}
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RouterModule.forChild(consultationRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  declarations: [BookComponent, BookStoreComponent, BookPageComponent, HomeComponent],
  exports: [BookStoreComponent]
})
export class ConsultationModule { }
