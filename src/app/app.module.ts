import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {HttpInterceptorService} from './shared/services/http-interceptor/http-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SpinnerComponent} from "./shared/widgets/spinner/spinner.component";
import {SpinnerService} from "./shared/widgets/spinner/spinner.service";

const appRoutes: Routes = [
  {path: '', redirectTo: 'consultation', pathMatch: 'full'},
  { path: 'consultation', loadChildren: 'app/consultation/consultation.module#ConsultationModule' },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: 'page-test', loadChildren: 'app/page-test/page-test.module#PageTestModule' }
];
@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
