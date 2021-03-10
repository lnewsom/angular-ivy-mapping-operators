import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap, exhaustMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { CatService } from '../cat.service';
import { IdService } from '../id.service';
import { Cat } from '../models/cat';

@Component({
  selector: 'map-single-value',
  templateUrl: './map-single-value.component.html',
  styleUrls: ['./map-single-value.component.css']
})
export class MapSingleValueComponent implements OnInit {
  public idMap$: Observable<number>;
  public catMergeMap$: Observable<Cat>;
  public catConcatMap$: Observable<Cat>;
  public catSwitchMap$: Observable<Cat>;
  public catExhaustMap$: Observable<Cat>;
  
  constructor(
    private idService: IdService,
    private catService: CatService
  ) { 
  }
  
  ngOnInit() {
    this.idMap$ = this.idService.getValue().pipe(
      map((id) => id)
    );

    this.catMergeMap$ = this.idService.getValue().pipe(
      mergeMap((id) => this.catService.getCatById(id))
    );

    this.catConcatMap$ = this.idService.getValue().pipe(
      concatMap((id) => this.catService.getCatById(id))
    );

    this.catSwitchMap$ = this.idService.getValue().pipe(
      switchMap((id) => this.catService.getCatById(id))
    );

    this.catExhaustMap$ = this.idService.getValue().pipe(
      exhaustMap((id) => this.catService.getCatById(id))
    );
  }

}
