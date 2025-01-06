import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {
  router = inject(Router);

  goToForm() {
    this.router.navigateByUrl('/formulaire/demo');
    // this.router.navigate(['/', 'formulaire', 'demo']);
  }
}
