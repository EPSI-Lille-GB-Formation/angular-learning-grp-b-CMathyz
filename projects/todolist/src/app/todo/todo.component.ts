import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { CommonModule } from '@angular/common';
import { TodoListDirective } from '../todo-list.directive';
@Component({
  selector: 'todo',
  standalone: true,
  imports: [CommonModule, TodoListDirective],
  template: `
  <article *ngIf="todo "TodoList-Hilight> 
  <div class="grid">
   <label for="todo-{{todo.id}}">
     <input type="checkbox" 
     id="todo-{{todo.id}}" 
     name="todo-{{todo.id}}"
     [checked] = "todo.isCompleted"
     />
     {{ todo.title }}
   </label>
   <div class= "action">
   <a href="#">Edit</a>
   <a href="#">Delete</a>
   </div>
  </div>
 </article>
`
  ,
  styles :[
    `
    .action{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    `
  ]
})
export class TodoComponent {
    @Input("value")
    todo: Todo | undefined;

    onCheck(){
      if(this.todo){
        this.todo.isCompleted = !this.todo?.isCompleted;
        console.table(this.todo)
      }
    }
}
