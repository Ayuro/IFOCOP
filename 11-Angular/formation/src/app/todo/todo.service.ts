import { Injectable } from '@angular/core';
import { Task } from './task.type';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
   tasks: Task[] = [
    {
      id: Date.now() + 1,
      title: 'Promener le chien',
      done: false,
      dueDate: new Date(2024, 8, 9, 6),
      doneAt: null,
      priority: 2,
    },
    {
      id: Date.now(),
      title: 'Apprendre Angular',
      done: true,
      dueDate: new Date(2024, 8, 9, 17),
      doneAt: new Date(2024, 8, 6, 12),
      priority: 1,
    },
  ];

  getPriorityTasks() {
    return this.tasks.sort((a, b) => a.priority - b.priority);
  }

  updateTaskState(task: Task) {
    task.doneAt = (task.done) ? new Date() : null;
  }
}
