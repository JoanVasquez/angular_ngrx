import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() menu!: any;
  @Input() activeLang: string;
  @Output() changeLanguage: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  onChangeLanguage(lang): void {
    this.changeLanguage.emit(lang);
  }
}
