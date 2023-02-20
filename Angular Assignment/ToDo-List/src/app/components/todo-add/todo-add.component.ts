import { Component, EventEmitter, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  title?: string;
  desc?: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  addTodo(formTodo: NgForm){ 
    if(this.title != undefined && this.title.trim() != ""){
        const todo = {
          title: this.title.trim(),
          desc: this.desc,
          active: true
        }
        this.todoAdd.emit(todo);
        formTodo.reset();
    }
    else{
      alert("Please enter the task title!");
    }
  }
}
