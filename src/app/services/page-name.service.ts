import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageNameService {
  private pageNameSubject = new BehaviorSubject<string>('');
  pageName$ = this.pageNameSubject.asObservable();

  setPageName(pageName: string) {
    this.pageNameSubject.next(pageName);
  }
}
