import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '@app/models/category.model';
import { Observable } from 'rxjs';
import { isSuccess, isLoading } from '@app/store/reducers/category.reducer';
import {
  defaultValues,
  setForm,
  setProps,
} from '@app/view/category/form-category/category.config';
import { AppState } from '@app/store';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { getLanguageLabels } from '@app/store/reducers/language.reducer';
import { AddCategory, RemoveSuccess } from '@app/store/actions/category.action';
import { getError } from '@app/store/reducers/error.reducer';
import { RemoveError } from '@app/store/actions/errors.action';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.scss'],
})
export class FormCategoryComponent implements OnInit {
  id: string;
  labels: any;
  titleLabel: string;
  btnSubmitLabel: string;
  props: any;
  form: FormGroup;
  loading: Observable<boolean>;
  error: any;
  isSuccess: any;
  category: Category = defaultValues;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    //GET THE LABELS FOR FORM CATEGORY
    this.store.pipe(select(getLanguageLabels)).subscribe((labels) => {
      this.labels = labels;

      this.titleLabel = this.category.id
        ? this.labels.editCategory
        : this.labels.createCategory;

      this.btnSubmitLabel = this.category.id
        ? this.labels.update
        : this.labels.save;

      this.props = setProps({
        name: this.labels.name,
        isAnActiveCategory: this.labels.isAnActiveCategory,
        isActive: this.labels.isActive,
      });
    });

    this.form = this.fb.group(setForm(this.category));
  }

  onSubmit(): void {
    this.category = this.form.value;
    this.id
      ? console.log('edit')
      : this.store.dispatch(new AddCategory(this.category));
    this.loading = this.store.pipe(select(isLoading));
    this.isSuccess = this.store.pipe(select(isSuccess));
    this.error = this.store.pipe(select(getError));
    this.form.reset();
    this.category = defaultValues;
  }

  onRemoveAlert(): void {
    this.store.dispatch(new RemoveError());
    this.store.dispatch(new RemoveSuccess());
    this.error = null;
    this.isSuccess = false;
  }
}
