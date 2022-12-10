import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SuccessNotificationService } from '../services/success-notification.service';

@Injectable({
  providedIn: 'root'
})
export class SuccessInterseptorService implements HttpInterceptor {

  constructor(private successNotification: SuccessNotificationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          if (evt.ok && this.successNotification.checkHttpRequestType(req.method)) {
            this.successNotification.setSuccessNotification((evt as any).url, evt)
          }
        }
      }));
  }
}
