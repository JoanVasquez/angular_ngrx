import { Observable } from 'rxjs';

export interface ICrud<T> {
  save?(data: T): Observable<T>;
  update?(data: T): Observable<T>;
  findById?(id: string): Observable<T>;
  findAll?(): Observable<Array<T>>;
  delete?(id: string): Observable<any>;
}
