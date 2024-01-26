import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { LanguageService } from '@app/services/language/language.service';
import * as fromLanguage from '@app/store/actions/language.action';

@Injectable({
  providedIn: 'root',
})
export class LanguageEffects {
  constructor(
    private actions$: Actions,
    private languageService: LanguageService
  ) {}

  setLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType<fromLanguage.SetLanguage>(
        fromLanguage.LanguageActionTypes.SET_LANGUAGE
      ),
      mergeMap((actions: fromLanguage.SetLanguage) =>
        this.languageService
          .setLanguage(actions.payload)
          .pipe(map((lang) => new fromLanguage.GetLanguage(lang)))
      )
    )
  );
}
