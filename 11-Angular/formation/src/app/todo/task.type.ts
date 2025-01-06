export interface Task {
  id: number,
  title: string;
  done: boolean;
  dueDate: Date;
  doneAt: null | Date;
  priority: number;
}
