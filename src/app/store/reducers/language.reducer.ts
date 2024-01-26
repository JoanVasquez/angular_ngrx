import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  LanguageActionTypes,
  LanguageActions,
} from '@app/store/actions/language.action';
import englishLabels from '@app/shared/en_labels';
import spanishLabels from '@app/shared/es_labels';

export interface LanguageState {
  labels: any;
  code: string;
}

const initialState: LanguageState = {
  labels: englishLabels,
  code: 'en',
};

export const languageReducer: (
  state: LanguageState,
  action: LanguageActions
) => LanguageState = (state = initialState, action: LanguageActions) => {
  if (action.type === LanguageActionTypes.GET_LANGUAGE) {
    switch (action.payload) {
      case 'en':
        return {
          ...state,
          code: 'en',
          labels: englishLabels,
        };

      case 'es':
        return {
          ...state,
          code: 'es',
          labels: spanishLabels,
        };
      default:
        return {
          ...state,
          code: 'en',
          labels: englishLabels,
        };
    }
  }
  return state;
};

const getLanguageFeautureState =
  createFeatureSelector<LanguageState>('language');

export const getLanguageLabels = createSelector(
  getLanguageFeautureState,
  (state: LanguageState) => state.labels
);

export const getLanguageCode = createSelector(
  getLanguageFeautureState,
  (state: LanguageState) => state.code
);
