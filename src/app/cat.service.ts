import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { Cat } from './models/cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private catSubject: Subject<Cat> = new Subject();
  private index: number  = 0;

  constructor() { 
    setInterval(this.passValue, 1000);
  }

  private catArray: Cat[] = [
    {id: 1, name: 'Mr. Milk', age: 19},
    {id: 2, name: 'Grandma', age: 1},
    {id: 3, name: 'Bunnymuffins', age: 4},
    {id: 4, name: 'Snufkin', age: 3},
    {id: 5, name: 'Potato', age: 5}
  ];

  private cats$: Observable<Cat> = from(this.catArray);

  public getCatById = (id: number): Observable<Cat> => this.cats$.pipe(
    first((cat) => cat.id == id)
  );

  public getNextCat = ():Observable<Cat> => this.catSubject;

  public passValue = () => {
    if (this.index > 4) this.index = 0;
    this.catSubject.next(this.catArray[this.index]);
    this.index++;
  };

}
