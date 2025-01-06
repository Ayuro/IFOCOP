import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { SiteMenuComponent } from '../site-menu/site-menu.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [SiteMenuComponent, RouterLink, RouterLinkActive],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  readonly authService = inject(AuthService);
}
