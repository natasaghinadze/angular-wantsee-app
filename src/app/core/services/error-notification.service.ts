import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notification } from '../base/notification';
import { Tuple } from '../base/tuple';

@Injectable({
  providedIn: 'root'
})
export class ErrorNotificationService {
  errorSub: BehaviorSubject<Tuple<boolean, Notification>> = new BehaviorSubject<Tuple<boolean, Notification>>(new Tuple<boolean, Notification>(false, {} as Notification));
  errorMap: Map<any, string> = new Map<any, string>();

  constructor() { }

  setErrorNotification(url: string, error: any): void {
    if (!this.errorMap.has(url)) {
      this.errorMap.set(error, url)
      this.errorSub.next(new Tuple<boolean, Notification>(true, new Notification(error.statusText, error.message, error.status)));
      let fakeObserveble = of(this).pipe(delay(environment.alertShowTime));
      fakeObserveble.subscribe((res:any) => {
        res.errorSub.next(new Tuple<boolean, Notification>(false, {} as Notification));
        this.errorMap.delete(error)
      })     
    }
  }
}
