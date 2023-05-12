import { Routes } from "@angular/router";
import { TodoComponent } from "./todo.component";


export const TODO_ROUTE: Routes = [
  {
    path: 'todo-list',
    component: TodoComponent
  }
]