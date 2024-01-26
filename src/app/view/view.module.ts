import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCategoryComponent } from './category/form-category/form-category.component';
import { ComponentsModule } from '@app/components/components.module';
import { ListCategoryComponent } from './category/list-category/list-category.component';

@NgModule({
  declarations: [FormCategoryComponent, ListCategoryComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [FormCategoryComponent, ListCategoryComponent],
})
export class ViewModule {}
