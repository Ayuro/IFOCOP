import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { TodoService } from '../todo.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [JsonPipe, TaskComponent, ReactiveFormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todoService = inject(TodoService);
  tasks = this.todoService.tasks;

  FormBuilder = new FormBuilder().nonNullable;
  form = this.FormBuilder.group({
    title: ['', Validators.required],
  });

  add() {
    this.todoService.addTask()
  }
}
