import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';
import { Product } from './models/products';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  private products$: Observable<Product> = from([
    {id: 1, name: 'Milk', price: 20},
    {id: 2, name: 'Bread', price: 15},
    {id: 3, name: 'Eggs', price: 36},
    {id: 4, name: 'Apple', price: 10},
    {id: 5, name: 'Potato', price: 5}
  ]);

  constructor() { }

  public getProductById = (id: number): Observable<Product> => this.products$.pipe(
      first((product) => product.id == id)
    );
}
