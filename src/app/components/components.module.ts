import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputErrorComponent } from './input-error/input-error.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { AlertComponent } from './alert/alert.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    FormComponent,
    InputErrorComponent,
    NavbarComponent,
    FooterComponent,
    TableComponent,
    AlertComponent,
    FooterComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  exports: [
    FormComponent,
    InputErrorComponent,
    NavbarComponent,
    FooterComponent,
    TableComponent,
    AlertComponent,
    FooterComponent,
  ],
})
export class ComponentsModule {}
