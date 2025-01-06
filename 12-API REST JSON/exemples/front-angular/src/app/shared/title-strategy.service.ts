import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TitleStrategyService extends TitleStrategy {
  private title = inject(Title);
  private appTitle = 'API REST JSON';

  constructor() {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);

    if (title) {
      this.title.setTitle(`${title} | ${this.appTitle}`);
    } else {
      this.title.setTitle(this.appTitle);
    }
  }
}
