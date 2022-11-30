import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterseptorService implements HttpInterceptor {

  constructor(private _loading: LoadingService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loading.setLoading(true, req.url);
    return next.handle(req)
      .pipe(catchError((err) => {
        this._loading.setLoading(false, req.url);
        return err;
      }))
      .pipe(map<any, any>((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          this._loading.setLoading(false, req.url);
        }
        return evt;
      }));
  }
}
