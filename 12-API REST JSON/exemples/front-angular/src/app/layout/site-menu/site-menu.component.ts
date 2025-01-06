import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-site-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-menu.component.html',
  styleUrl: './site-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteMenuComponent {}
