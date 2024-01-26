import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor() {}

  getLanguage(): Observable<string> {
    const lang = localStorage.getItem('lang');
    return of(lang);
  }

  setLanguage(lang: string): Observable<string> {
    localStorage.setItem('lang', lang);
    return of(lang);
  }
}
