import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicElementDetailsComponent } from './atomic-element-details.component';

describe('AtomicElementDetailsComponent', () => {
  let component: AtomicElementDetailsComponent;
  let fixture: ComponentFixture<AtomicElementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomicElementDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicElementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
