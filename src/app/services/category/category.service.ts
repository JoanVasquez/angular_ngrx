import { Injectable } from '@angular/core';
import { ICrud } from '@app/intefaces/crud.interface';
import { Category } from '@app/models/category.model';
import { v4 as uuidv4 } from 'uuid';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService implements ICrud<Category> {
  private categories: Array<Category> = [];

  constructor() {}

  save(data: Category): Observable<Category> {
    data = JSON.parse(JSON.stringify(data));
    data.id = uuidv4();
    data.createdBy = 'Joan Vasquez';
    data.createdDate = new Date().toISOString();
    data.modifiedBy = 'Joan Vasquez';
    data.modifiedDate = new Date().toISOString();
    const tmpArr = [data];
    this.categories = tmpArr;
    return of(data);
  }

  update(data: Category): Observable<Category> {
    return of(data);
  }

  findById(id: string): Observable<Category> {
    const category: Category = this.categories.find(
      (item: Category) => item.id === id
    );

    return of(category);
  }

  findAll(): Observable<Category[]> {
    for (let index = 0; index < 100; index++) {
      const category: Category = {
        id: uuidv4(),
        name: `test ${index}`,
        isActive: true,
        createdBy: 'Joan Vasquez',
        createdDate: new Date().toISOString(),
        modifiedBy: 'Joan Vasquez',
        modifiedDate: new Date().toISOString(),
      };
      this.categories.push(category);
    }

    return of(this.categories);
  }

  delete(id: string): Observable<any> {
    const index = this.categories.findIndex((item: Category) => item.id === id);
    this.categories[index] = null;
    return of({
      isDelete: true,
    });
  }
}
