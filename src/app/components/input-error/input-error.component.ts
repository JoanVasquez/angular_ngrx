import { Component, Input, OnInit } from '@angular/core';
import { AppState } from '@app/store';
import { Store, select } from '@ngrx/store';
import * as fromLanguage from '@app/store/reducers/language.reducer';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss'],
})
export class InputErrorComponent implements OnInit {
  @Input() error?: string;
  @Input() form?: any;
  labels: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .pipe(select(fromLanguage.getLanguageLabels))
      .subscribe((labels) => (this.labels = labels));
  }
}
