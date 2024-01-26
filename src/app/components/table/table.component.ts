import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '@app/store';
import { getLanguageLabels } from '@app/store/reducers/language.reducer';
import { Store, select } from '@ngrx/store';
import { PaginationInstance } from 'ngx-pagination';
import { Observable } from 'rxjs';
import { deleteConfig } from './table.config';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  objectKeys = Object.keys;
  objectValues = Object.values;
  labels: any;
  @Input() loading: Observable<boolean>;
  @Input() header: string;
  @Input() headerTable: any;
  @Input() data: Observable<any>;
  @Input() action: any;
  @Input() actionText: string;
  @Input() updatePath: string;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  @Output() showDetails: EventEmitter<any> = new EventEmitter<any>();
  p: number = 1;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.store
      .pipe(select(getLanguageLabels))
      .subscribe((labels) => (this.labels = labels));
  }

  onUpdate(id: string): void {
    this.router.navigateByUrl(`${this.updatePath}/${id}`);
  }

  onDelete(id: string): void {
    deleteConfig(this.delete, id, this.labels);
  }

  onShowDetails(model: any): void {
    this.showDetails.emit(model);
  }

  displayTableData(data): any {
    if (typeof data === 'boolean') {
      if (data === true) {
        return 'Yes';
      } else {
        return 'No';
      }
    }
    return data;
  }

  onChange($event) {
    this.p = $event;
  }
}
