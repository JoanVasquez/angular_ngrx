import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './store';
import { GetLanguage, SetLanguage } from './store/actions/language.action';
import { GetCategories } from './store/actions/category.action';
import getMenu from '@app/menu.config';
import {
  getLanguageCode,
  getLanguageLabels,
} from './store/reducers/language.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  labels: any;
  activeLang: string;
  menu: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    let lang = localStorage.getItem('lang');
    if (lang) this.store.dispatch(new GetLanguage(lang));

    this.store.dispatch(new GetCategories());

    // this.store
    //   .pipe(select(getLanguageCode))
    //   .subscribe((code) => (this.activeLang = code));

    //GET THE LABELS FOR THE MENU
    this.store.pipe(select(getLanguageLabels)).subscribe((labels) => {
      this.labels = labels;
      this.menu = getMenu(this.labels);
    });
  }

  onChangeLanguage($event): void {
    this.store.dispatch(new SetLanguage($event));
  }
}
