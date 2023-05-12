import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TODO_ROUTE } from './todo.routes';
import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TODO_ROUTE)
  ]
})
export class TodoModule { }
