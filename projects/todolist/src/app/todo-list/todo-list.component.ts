import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TODOS } from '../mock-todo';
import { TodoListDirective } from '../todo-list.directive';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, TodoListDirective, TodoComponent],
  template: `
    <h1>Liste des chose a faire</h1>

      <a href="#" role="button" (click)="onClickTodo()">A faire </a>
      <a href="#" role="button" (click)="onClickTodoCpmleted()">Terminée</a>
      <a href="#" role="button" (click)="onClickTodoAfficher()">Afficher tous</a>
      <ng-container *ngFor="let todo of todolist">
      <ng-container *ngIf=" todo.isCompleted === completedFilter || completedFilter === null">
        <todo [value] = "todo" />
      </ng-container>
      </ng-container>
      `,
  styles : [
    ` `
  ]    
})
export class TodoListComponent {
  todolist = TODOS;
  completedFilter : boolean | null = null;
  onClickTodo(){
    this.completedFilter = false;

  }
  onClickTodoCpmleted(){
    this.completedFilter = true;
  }
  onClickTodoAfficher(){
    this.completedFilter = null;
  }
}
