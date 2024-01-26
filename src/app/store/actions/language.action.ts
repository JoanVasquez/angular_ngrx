import { Action } from '@ngrx/store';

export enum LanguageActionTypes {
  GET_LANGUAGE = '[LANGUAGE] Get Language',
  SET_LANGUAGE = '[LANGUAGE] Set Language',
}

export class GetLanguage implements Action {
  readonly type = LanguageActionTypes.GET_LANGUAGE;
  constructor(public payload: any) {}
}

export class SetLanguage implements Action {
  readonly type = LanguageActionTypes.SET_LANGUAGE;
  constructor(public payload: any) {}
}

export type LanguageActions = GetLanguage | SetLanguage;
