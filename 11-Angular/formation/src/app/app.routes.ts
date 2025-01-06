import { Routes } from '@angular/router';
import { AtomicElementDetailsComponent } from './components/atomic-element-details/atomic-element-details.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PeriodTableComponent } from './components/period-table/period-table.component';
import { SyntaxComponent } from './components/syntax/syntax.component';
import { authGuard } from './guards/auth.guard';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

export const routes: Routes = [
  {
    path: '',
    component: SyntaxComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'tableau-periodique',
    component: PeriodTableComponent,
  },
  // {
  //   path: 'tableau-periodique/intro',
  //   component: PeriodTableComponent,
  // },
  {
    path: 'tableau-periodique/:numero',
    component: AtomicElementDetailsComponent,
  },
  {
    path: 'directives',
    component: DirectivesComponent,
    canMatch: [authGuard],
  },
  {
    path: 'formulaire/demo',
    loadComponent: () =>
      import('./components/form-demo/form-demo.component').then(
        (m) => m.FormDemoComponent
      ),
  },
  {
    path: 'todo',
    component: TodoListComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
