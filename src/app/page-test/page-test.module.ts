import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MatTabsModule} from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './home/home.component';

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
    SharedModule,
    RouterModule.forChild(testPageRoutes)
  ],
  declarations: [HomeComponent]
})
export class PageTestModule { }
