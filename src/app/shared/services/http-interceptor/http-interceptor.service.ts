import { Injectable } from '@angular/core';
import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/do';
import {Router} from '@angular/router';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router) {}

  /**
   * Intercept.
   * @param {HttpRequest<any>} request
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
        console.log('interceptor : Appel WS OK');
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        console.log('interceptor : Appel WS failed');
        if (err.status === 404) {
          this.router.navigate(['']);
        } else if (err.status === 504) {
          alert('Error 504');
        } else {
          this.router.navigate(['']);
        }
      }
    });
  }

}