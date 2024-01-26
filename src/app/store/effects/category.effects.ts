import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import * as fromCategoriesAction from '@app/store/actions/category.action';
import { AddError } from '@app/store/actions/errors.action';
import { CategoryService } from '@app/services/category/category.service';
import { Category } from '@app/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryEffects {
  constructor(
    private actions: Actions,
    private categoryService: CategoryService
  ) {}

  addCategory = createEffect(() =>
    this.actions.pipe(
      ofType<fromCategoriesAction.AddCategory>(
        fromCategoriesAction.CategoryActionTypes.ADD_CATEGORY
      ),
      map((action) => action.payload),
      mergeMap((category: Category) =>
        this.categoryService.save(category).pipe(
          map(
            (category: Category) =>
              new fromCategoriesAction.AddCategorySuccess(category)
          ),
          catchError((err) => of(new AddError(err)))
        )
      )
    )
  );

  getCategories = createEffect(() =>
    this.actions.pipe(
      ofType<fromCategoriesAction.GetCategories>(
        fromCategoriesAction.CategoryActionTypes.GET_CATEGORIES
      ),
      mergeMap(() =>
        this.categoryService.findAll().pipe(
          map(
            (categories: Category[]) =>
              new fromCategoriesAction.GetCategoriesSuccess(categories)
          ),
          catchError((err) => of(new AddError(err)))
        )
      )
    )
  );
}
