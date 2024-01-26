import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '..';
import * as testActions from '@app/store/actions/test.action';
import { catchError, map, mergeMap, of } from 'rxjs';
import { TestService } from '@app/services/test/test.service';
import { AddError } from '@app/store/actions/errors.action';

@Injectable({
  providedIn: 'root',
})
export class TestEffect {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private testService: TestService
  ) {}

  loadTests$ = createEffect(() =>
    this.actions$.pipe(
      ofType<testActions.LoadTest>(testActions.TestActionTypes.LOAD_TESTS),
      mergeMap((actions: testActions.LoadTest) =>
        this.testService.getTests().pipe(
          map((test) => new testActions.GetTests(test)),
          catchError((err) => of(new AddError(err)))
        )
      )
    )
  );
}
