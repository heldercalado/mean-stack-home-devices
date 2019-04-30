import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  emitChange$: Subject<any> = new BehaviorSubject<any>('Home');

  constructor() { }
  emit(value: any) {
    this.emitChange$.next(value);
  }

  get emitChange(): BehaviorSubject<any> {
    return (this.emitChange$ as BehaviorSubject<any>);
  }
}
