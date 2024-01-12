import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoListDirective } from '../todo-list.directive';
import { TodoComponent } from '../todo/todo.component';
import {TodoService} from '../todo.service';
import {Todo} from '../todo';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, TodoListDirective, TodoComponent],
  template: `
    <h1>Liste des chose a faire</h1>

      <a href="#" role="button" (click)="onClickTodo()">A faire </a>
      <a href="#" role="button" (click)="onClickTodoCompleted()">Terminée</a>
      <a href="#" role="button" (click)="onClickTodoShowEverything()">Afficher tous</a>
      <ng-container *ngFor="let todo of todoList">
      <ng-container *ngIf=" todo.isCompleted === completedFilter || completedFilter === null">
        <todo [value] = "todo" />
      </ng-container>
      </ng-container>
      `,
  styles : [
    ` `
  ]    
})
export class TodoListComponent{
  todoList:Todo[] = [];

  completedFilter:boolean = false;
  showEverything:boolean = false;

  constructor(private todoservice: TodoService) {
  }

  ngOnInit():void{
    this.todoservice.getTodoList().subscribe(todos => this.todoList = todos)
    this.todoservice.getTodoById(5).subscribe(todo => console.log(todo))
  }
  onClickTodo():void{
    this.completedFilter = false
    this.showEverything = false
  }
  onClickTodoCompleted():void{
    this.completedFilter = true
    this.showEverything = false
  }
  onClickTodoShowEverything():void{
    this.showEverything = true
  }
}