import { ErrorActions } from '@app/store/actions/errors.action';
import { ErrorActionTypes } from '@app/store/actions/errors.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ErrorState {
  error: any;
}

const initialState: ErrorState = {
  error: null,
};

export const errorReducer: (
  state: ErrorState,
  action: ErrorActions
) => ErrorState = (state = initialState, action: ErrorActions) => {
  if (action.type === ErrorActionTypes.ADD_ERROR) {
    return {
      ...state,
      error: action.payload,
    };
  } else if (action.type === ErrorActionTypes.REMOVE_ERROR) {
    return {
      ...state,
      error: null,
    };
  }

  return state;
};

const getErrorFeautureState = createFeatureSelector<ErrorState>('error');

export const getError = createSelector(
  getErrorFeautureState,
  (state: ErrorState) => state.error
);
