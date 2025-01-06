import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantsSectionComponent } from './restaurants-section-component';

describe('RestaurantsSectionComponent', () => {
  let component: RestaurantsSectionComponent;
  let fixture: ComponentFixture<RestaurantsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
