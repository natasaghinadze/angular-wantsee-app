import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorNotificationService } from '../services/error-notification.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterseptorService implements HttpInterceptor{

  constructor(private errorNotificationService:ErrorNotificationService, private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status == 401) {
            this.router.navigate([]);
          }
          let errorMsg = '';
          this.errorNotificationService.setErrorNotification((error as any).url, error);
          if (error.error instanceof ErrorEvent) {
            console.log('client side error');
            errorMsg = `Error: ${error.error.message}`;
          } else {
            console.log('server side error');
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
          }
          return throwError(errorMsg);
        })
      )
  }
}
