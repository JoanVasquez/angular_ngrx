import { Actions, TestActionTypes } from '@app/store/actions/test.action';

export interface TestState {
  loading: boolean;
  data: any;
}

const initialState: TestState = {
  loading: false,
  data: null,
};

export const testReducer: (state: TestState, action: Actions) => TestState = (
  state = initialState,
  action: Actions
) => {
  if (action.type === TestActionTypes.LOAD_TESTS) {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === TestActionTypes.GET_TESTS) {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  }

  return state;
};
