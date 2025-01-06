import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { FormDemoComponent } from './components/form-demo/form-demo.component';
import { HeaderComponent } from './components/header.component';
import { PeriodTableComponent } from './components/period-table/period-table.component';
import { SyntaxComponent } from './components/syntax/syntax.component';
import { ExerciceB3Component } from './exercices/2-proprietes-evenements/exercice-b3/exercice-b3.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SyntaxComponent,
    DirectivesComponent,
    PeriodTableComponent,
    FormDemoComponent,
    ExerciceB3Component,
    TodoListComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
