import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddBookReactiveComponent } from './add-book-reactive/add-book-reactive.component';

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
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [HomeComponent, AddBookComponent, AddBookReactiveComponent]
})
export class AdminModule { }
