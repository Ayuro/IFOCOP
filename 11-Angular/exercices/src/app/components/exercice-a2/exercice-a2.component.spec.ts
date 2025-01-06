import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceA2Component } from './exercice-a2.component';

describe('ExerciceA2Component', () => {
  let component: ExerciceA2Component;
  let fixture: ComponentFixture<ExerciceA2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceA2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciceA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
