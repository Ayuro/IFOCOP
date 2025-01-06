import { Component, inject, Input } from '@angular/core';
import { Task } from '../task.type';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  todoService = inject(TodoService);
}
