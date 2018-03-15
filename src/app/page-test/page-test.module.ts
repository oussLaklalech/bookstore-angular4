import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {MatTabsModule} from '@angular/material';

const testPageRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: HomeComponent}
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild(testPageRoutes)
  ],
  declarations: [HomeComponent]
})
export class PageTestModule { }
