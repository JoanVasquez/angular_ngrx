import { Category } from '@app/models/category.model';
import {
  Dictionary,
  EntityAdapter,
  EntityState,
  createEntityAdapter,
} from '@ngrx/entity';
import {
  CategoryActionTypes,
  CategoryActions,
} from '@app/store/actions/category.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CategoryState extends EntityState<Category> {
  isSuccess: boolean;
  loading: boolean;
}

export const adapter: EntityAdapter<Category> = createEntityAdapter();

const initialState: CategoryState = adapter.getInitialState({
  isSuccess: false,
  loading: false,
});

export const categoryReducer: (
  state: CategoryState,
  action: CategoryActions
) => CategoryState = (state = initialState, action: CategoryActions) => {
  switch (action.type) {
    case CategoryActionTypes.ADD_CATEGORY:
      return { ...state, loading: true };

    case CategoryActionTypes.ADD_CATEGORY_SUCCESS:
      state = { ...state, isSuccess: true, loading: false };
      return adapter.addOne(action.payload, state);

    case CategoryActionTypes.GET_CATEGORIES:
      return { ...state, loading: true };

    case CategoryActionTypes.GET_CATEGORIES_SUCCESS:
      state = { ...state, isSuccess: true, loading: false };
      return adapter.addMany(action.payload, state);

    case CategoryActionTypes.REMOVE_SUCCESS:
      return { ...state, isSuccess: false };

    default:
      return state;
  }
};

const getCategoryFeautureState =
  createFeatureSelector<CategoryState>('category');

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const getCategoryEntities = createSelector(
  getCategoryFeautureState,
  selectEntities
);

export const getCategories = createSelector(
  getCategoryFeautureState,
  selectAll
);
export const isSuccess = createSelector(
  getCategoryFeautureState,
  (state: CategoryState) => state.isSuccess
);

export const isLoading = createSelector(
  getCategoryFeautureState,
  (state: CategoryState) => state.loading
);

// export const getEntityById = createSelector(
//   getCategoryEntities,
//   (entities: Dictionary<Category>, props: { id: string }) => entities[props.id]
// );
