import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceA7Component } from './exercice-a7.component';

describe('ExerciceA7Component', () => {
  let component: ExerciceA7Component;
  let fixture: ComponentFixture<ExerciceA7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceA7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciceA7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
