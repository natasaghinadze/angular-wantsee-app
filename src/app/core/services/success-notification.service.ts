import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notification } from '../base/notification';
import { Tuple } from '../base/tuple';

@Injectable({
  providedIn: 'root'
})
export class SuccessNotificationService {
  successSub: BehaviorSubject<Tuple<boolean, Notification>> = new BehaviorSubject<Tuple<boolean, Notification>>(new Tuple<boolean, Notification>(false, {} as Notification))
  successMap: Map<any, string> = new Map<any, string>();
  private httpRequests: string[] = ["PATCH", "POST", "DELETE", "PUT"]

  constructor() { }

  checkHttpRequestType(requestType: string): boolean {
    return this.httpRequests.some(item => item == requestType);
  }

  setSuccessNotification(url: string, success: any): void {
    if (!this.successMap.has(url)) {
      this.successMap.set(success, url);
      this.successSub.next(new Tuple<boolean, Notification>(true, new Notification(success.statusText, "", success.status)))
      let fakeObservable = of(this).pipe(delay(environment.alertShowTime));
      fakeObservable.subscribe((res: any) => {
        res.successSub.next(new Tuple<boolean, Notification>(false, {} as Notification));
        this.successMap.delete(url);
      })
    }
  }
}
