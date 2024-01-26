import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}

  getTests(): Observable<any> {
    let tests: Array<any> = [];

    for (let i = 0; i <= 10; i++) {
      tests.push({
        id: i,
        header_one: `test 1`,
        header_two: `test 2`,
        header_three: `test 3`,
        header_four: `test 4`,
      });
    }

    const testObservable = new Observable((observer) => {
      setTimeout(() => {
        observer.next(tests);
      }, 1000);
    });

    return testObservable;
  }
}
