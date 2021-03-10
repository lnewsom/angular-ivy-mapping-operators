import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Cat } from './models/cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor() { }

  private cats$: Observable<Cat> = from([
    {id: 1, name: 'Mr. Milk', age: 19},
    {id: 2, name: 'Grandma', age: 1},
    {id: 3, name: 'Bunnymuffins', age: 4},
    {id: 4, name: 'Snufkin', age: 3},
    {id: 5, name: 'Potato', age: 5}
  ]);

  public getCatById = (id: number): Observable<Cat> => this.cats$.pipe(
      first((cat) => cat.id == id)
    );
}
