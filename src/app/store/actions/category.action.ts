import { Action } from '@ngrx/store';

export enum CategoryActionTypes {
  ADD_CATEGORY = '[CATEGORY] Add Category',
  ADD_CATEGORY_SUCCESS = '[CATEGORY] Add Category Success',
  EDIT_CATEGORY = '[CATEGORY] Edit Category',
  EDIT_CATEGORY_SUCCESS = '[CATEGORY] Edit Category Success',
  DELETE_CATEGORY = '[CATEGORY] Delete Category',
  DELETE_CATEGORY_SUCCESS = '[CATEGORY] Delete Category Success',
  GET_CATEGORIES = '[CATEGORY] Get Categories',
  GET_CATEGORIES_SUCCESS = '[CATEGORY] Get Categories Success',
  REMOVE_SUCCESS = '[CATEGORY] Remove Success',
}

export class AddCategory implements Action {
  readonly type = CategoryActionTypes.ADD_CATEGORY;
  constructor(public payload: any) {}
}

export class AddCategorySuccess implements Action {
  readonly type = CategoryActionTypes.ADD_CATEGORY_SUCCESS;
  constructor(public payload: any) {}
}

export class EditCategory implements Action {
  readonly type = CategoryActionTypes.EDIT_CATEGORY;
  constructor(public payload: any) {}
}

export class EditCategorySuccess implements Action {
  readonly type = CategoryActionTypes.EDIT_CATEGORY_SUCCESS;
  constructor(public payload: any) {}
}

export class DeleteCategory implements Action {
  readonly type = CategoryActionTypes.DELETE_CATEGORY;
  constructor(public payload: any) {}
}

export class DeleteCategorySuccess implements Action {
  readonly type = CategoryActionTypes.DELETE_CATEGORY_SUCCESS;
  constructor(public payload: any) {}
}

export class GetCategories implements Action {
  readonly type = CategoryActionTypes.GET_CATEGORIES;
  constructor() {}
}

export class GetCategoriesSuccess implements Action {
  readonly type = CategoryActionTypes.GET_CATEGORIES_SUCCESS;
  constructor(public payload: any) {}
}

export class RemoveSuccess implements Action {
  readonly type = CategoryActionTypes.REMOVE_SUCCESS;
  constructor() {}
}

export type CategoryActions =
  | AddCategory
  | AddCategorySuccess
  | EditCategory
  | EditCategorySuccess
  | DeleteCategory
  | DeleteCategorySuccess
  | GetCategories
  | GetCategoriesSuccess
  | RemoveSuccess;
