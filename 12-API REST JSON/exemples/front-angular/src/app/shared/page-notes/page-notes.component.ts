import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-notes',
  standalone: true,
  imports: [],
  templateUrl: './page-notes.component.html',
  styleUrl: './page-notes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotesComponent {}
