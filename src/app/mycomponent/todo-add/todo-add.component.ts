import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  title: string | undefined;
  desc: string | undefined;
  @Output() todoAdd: EventEmitter<todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onSubmit(){
    const todo = {
      sno:4,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
  }
}
