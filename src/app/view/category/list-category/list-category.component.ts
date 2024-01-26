import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/store';
import {
  DeleteCategory,
  RemoveSuccess,
} from '@app/store/actions/category.action';
import { RemoveError } from '@app/store/actions/errors.action';
import {
  getCategories,
  isLoading,
  isSuccess,
} from '@app/store/reducers/category.reducer';
import { getError } from '@app/store/reducers/error.reducer';
import { getLanguageLabels } from '@app/store/reducers/language.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
})
export class ListCategoryComponent implements OnInit {
  labels: any;
  error: any;
  loading: Observable<boolean>;
  headerTable: any;
  data: Observable<any>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loading = this.store.pipe(select(isLoading));
    this.data = this.store.pipe(select(getCategories));

    this.store.pipe(select(getLanguageLabels)).subscribe((labels) => {
      this.labels = labels;
      this.headerTable = {
        id: 'ID',
        name: labels.name,
        isActive: labels.isActive,
        actions: {
          edit: labels.editText,
          delete: labels.deleteText,
        },
      };
    });
  }

  delete($event): void {
    this.store.dispatch(new DeleteCategory($event));
    this.store.pipe(select(isSuccess)).subscribe((isDeleted) => {
      if (isDeleted)
        Swal.fire(this.labels.deleted, this.labels.deletedSuccess, 'success');
    });
    this.error = this.store.pipe(select(getError));
  }

  onRemoveAlert(): void {
    this.store.dispatch(new RemoveError());
    this.store.dispatch(new RemoveSuccess());
    this.error = null;
  }
}
