import { DOCUMENT } from '@angular/common';
import { provideLocationMocks } from '@angular/common/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { Router, TitleStrategy, provideRouter } from '@angular/router';
import { TestComponent } from '../testing';
import { TitleStrategyService } from './title-strategy.service';

export const ngTitleSpy: jasmine.SpyObj<Title> = jasmine.createSpyObj('Title', [
  'getTitle',
  'setTitle',
]);

describe('TitleStrategyService', () => {
  let router: Router;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideLocationMocks(),
        provideRouter([]),
        {
          provide: TitleStrategy,
          useClass: TitleStrategyService,
        },
      ],
    });

    router = TestBed.inject(Router);
    document = TestBed.inject(DOCUMENT);
  });

  describe('updateTitle', () => {
    it('should set page title correctly when title is not provided', fakeAsync(() => {
      router.resetConfig([
        {
          path: 'home',
          component: TestComponent,
        },
      ]);
      router.navigateByUrl('/home');
      tick();
      expect(document.title).toBe('Cours Angular');
    }));

    it('should set page title correctly when title is empty string', fakeAsync(() => {
      router.resetConfig([
        {
          path: 'home',
          title: '',
          component: TestComponent,
        },
      ]);
      router.navigateByUrl('/home');
      tick();
      expect(document.title).toBe('Cours Angular');
    }));
    it('should set page title correctly when title is provided', fakeAsync(() => {
      router.resetConfig([
        {
          path: 'home',
          title: 'Home',
          component: TestComponent,
        },
      ]);
      router.navigateByUrl('/home');
      tick();
      expect(document.title).toBe('Home | Cours Angular');
    }));
  });
});
