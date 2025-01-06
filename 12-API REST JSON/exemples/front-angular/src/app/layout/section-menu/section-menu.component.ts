import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface SectionMenuLink {
  url: string;
  text: string;
  exact?: boolean;
}

@Component({
  selector: 'app-section-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './section-menu.component.html',
  styleUrl: './section-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionMenuComponent {
  @Input() links: SectionMenuLink[] = [];
}
