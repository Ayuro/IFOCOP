import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  SectionMenuComponent,
  SectionMenuLink,
} from '../../layout/section-menu/section-menu.component';

@Component({
  selector: 'app-json-placeholder-section',
  standalone: true,
  imports: [RouterOutlet, SectionMenuComponent],
  templateUrl: './json-placeholder-section.component.html',
  styleUrl: './json-placeholder-section.component.scss',
})
export class JsonPlaceholderSectionComponent {
  links: SectionMenuLink[] = [
    { url: '.', text: 'Intro', exact: true },
    { url: 'users', text: 'Utilisateurs' },
    { url: 'albums', text: 'Albums' },
  ];
}
