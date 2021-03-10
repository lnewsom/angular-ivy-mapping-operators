import { Component, OnInit } from '@angular/core';
import { from, Observable, of, Subject } from 'rxjs';
import { concatMap, exhaustMap, map, mergeMap, switchMap, take } from 'rxjs/operators';
import { IdService } from '../id.service';

@Component({
  selector: 'map-test',
  templateUrl: './map-test.component.html',
  styleUrls: ['./map-test.component.css']
})
export class MapTestComponent implements OnInit {
  public idMap$: Observable<number>;
  public idMergeMap$: Observable<number>;
  public idConcatMap$: Observable<number>;
  public idSwitchMap$: Observable<number>;
  public idExhaustMap$: Observable<number>;

  
  constructor(
    private idService: IdService
  ) { 
  }

  ngOnInit() {
    this.idMap$ = this.idService.getValue().pipe(
      map((id) => id)
    );

    this.idMergeMap$ = this.idService.getValue().pipe(
      mergeMap((id) => of(id))
    );

    this.idConcatMap$ = this.idService.getValue().pipe(
      concatMap((id) => of(id))
    );

    this.idSwitchMap$ = this.idService.getValue().pipe(
      switchMap((id) => of(id))
    );

    this.idExhaustMap$ = this.idService.getValue().pipe(
      exhaustMap((id) => of(id))
    );
  }
}
