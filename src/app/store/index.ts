import { ActionReducerMap } from '@ngrx/store';
import { TestState, testReducer } from '@app/store/reducers/test.reducer';
import { TestEffect } from '@app/store/effects/test.effect';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './reducers/router.reducer';
import { LanguageState, languageReducer } from './reducers/language.reducer';
import { LanguageEffects } from './effects/language.effects';
import { CategoryEffects } from './effects/category.effects';
import { CategoryState, categoryReducer } from './reducers/category.reducer';
import { ErrorState, errorReducer } from './reducers/error.reducer';

export interface AppState {
  test: TestState;
  category: CategoryState;
  error: ErrorState;
  language: LanguageState;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  category: categoryReducer,
  error: errorReducer,
  language: languageReducer,
  test: testReducer,
};

export const effects = [TestEffect, LanguageEffects, CategoryEffects];
