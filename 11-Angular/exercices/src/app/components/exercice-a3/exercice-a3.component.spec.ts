import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceA3Component } from './exercice-a3.component';

describe('ExerciceA3Component', () => {
  let component: ExerciceA3Component;
  let fixture: ComponentFixture<ExerciceA3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceA3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciceA3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
