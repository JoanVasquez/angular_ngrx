import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormCategoryComponent } from './form-category/form-category.component';
import { ViewModule } from '../view.module';
import { ListCategoryComponent } from './list-category/list-category.component';

const routes: Routes = [
  { path: 'new', component: FormCategoryComponent },
  { path: 'edit/:id', component: FormCategoryComponent },
  { path: 'list', component: ListCategoryComponent },
];

@NgModule({
  imports: [CommonModule, ViewModule, RouterModule.forChild(routes)],
})
export class CategoryRoutingModule {}
