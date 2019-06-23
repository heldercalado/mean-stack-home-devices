import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

export interface EventMessage {
  Type: string;
  Value: any;
  Name?: string;
}



@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  emitChange$: Subject<any> = new BehaviorSubject<any>('Home');
  ItemsPerPage$: Subject<any> = new BehaviorSubject<any>({Value: 20});
  sortBy$: Subject<any> = new BehaviorSubject<any>('des');
  searchKeyWord$: Subject<any> = new BehaviorSubject<any>('');
  loggedIn$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  userName$: Subject<string> = new BehaviorSubject<string>('');
  constructor() { }
  emit(value: EventMessage) {

    if (value.Type === 'itemsPerPage') {
      this.ItemsPerPage$.next(value);

    } else if (value.Type === 'pageName') {
      this.emitChange$.next(value);
    } else if (value.Type === 'sortBy') {
      this.sortBy$.next(value);

    } else if (value.Type === 'search') {
      this.searchKeyWord$.next(value);
    } else if (value.Type === 'loggedIn') {
      this.userName.next(value);
      this.isUserLoggedIn.next(value);
    }

  }

  get emitChange(): BehaviorSubject<any> {
    return (this.emitChange$ as BehaviorSubject<any>);
  }
  get itemsPerPage(): BehaviorSubject<any> {
    return (this.ItemsPerPage$ as BehaviorSubject<any>);
  }
  get sortByText(): BehaviorSubject<any> {
    return (this.sortBy$ as BehaviorSubject<any>);
  }
  get searchKeyWordText(): BehaviorSubject<any> {
    return (this.searchKeyWord$ as BehaviorSubject<any>);
  }
  get isUserLoggedIn(): BehaviorSubject<any> {
    return (this.loggedIn$ as BehaviorSubject<any>);
  }
  get userName(): BehaviorSubject<any> {
    return (this.userName$ as BehaviorSubject<any>);
  }
}
