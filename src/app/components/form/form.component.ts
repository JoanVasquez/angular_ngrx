import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() props: any;
  @Input() form?: FormGroup;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() reset: EventEmitter<any> = new EventEmitter<any>();
  @Input() btnSubmitLabel: string;
  @Input() btnResetLabel: string;

  constructor() {}

  // onReset(): void {
  //   this.form?.reset();
  // }
}
