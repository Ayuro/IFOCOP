import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceB3Component } from './exercice-b3.component';

describe('ExerciceB3Component', () => {
  let component: ExerciceB3Component;
  let fixture: ComponentFixture<ExerciceB3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceB3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceB3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
