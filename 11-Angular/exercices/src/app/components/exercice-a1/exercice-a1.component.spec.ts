import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceA1Component } from './exercice-a1.component';

describe('ExerciceA1Component', () => {
  let component: ExerciceA1Component;
  let fixture: ComponentFixture<ExerciceA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceA1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciceA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
