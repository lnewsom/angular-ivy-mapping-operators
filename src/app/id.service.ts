import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IdService {
  private idSubject: Subject<number> = new Subject();
  private index: number  = 1;

  constructor() {
    setInterval(this.passValue, 1000);
   }

  public getValue = ():Observable<number> => this.idSubject.pipe(take(10));

  public passValue = () => {
    if (this.index > 5) this.index = 1;
    this.idSubject.next(this.index);
    this.index++;
  };

  public resetValue = () => this.index = 1;
}
