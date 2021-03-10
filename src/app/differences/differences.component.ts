import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, concatMap, switchMap, exhaustMap, delay } from 'rxjs/operators';
import { IdService } from '../id.service';

@Component({
  selector: 'differences',
  templateUrl: './differences.component.html',
  styleUrls: ['./differences.component.css']
})
export class DifferencesComponent implements OnInit {
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
      map((id) => id),
      delay(1000)
    );

    this.idMergeMap$ = this.idService.getValue().pipe(
      mergeMap((id) => of(id).pipe(
        delay(1000)
      ))
    );

    this.idConcatMap$ = this.idService.getValue().pipe(
      concatMap((id) => of(id).pipe(
        delay(1000)
      ))
    );

    this.idSwitchMap$ = this.idService.getValue().pipe(
      switchMap((id) => of(id).pipe(
        delay(1000)
      ))
    );

    this.idExhaustMap$ = this.idService.getValue().pipe(
      exhaustMap((id) => of(id).pipe(
        delay(1000)
      ))
    );
  }

}
