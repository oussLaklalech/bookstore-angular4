import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {HttpInterceptorService} from './shared/services/http-interceptor/http-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', redirectTo: 'consultation', pathMatch: 'full'},
  { path: 'consultation', loadChildren: 'app/consultation/consultation.module#ConsultationModule' },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
