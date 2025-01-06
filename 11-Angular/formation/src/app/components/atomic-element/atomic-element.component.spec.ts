import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicElementComponent } from './atomic-element.component';

describe('AtomicElementComponent', () => {
  let component: AtomicElementComponent;
  let fixture: ComponentFixture<AtomicElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomicElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
