import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantsBoroughsComponent } from './restaurants-boroughs.component';

describe('RestaurantsBoroughsComponent', () => {
  let component: RestaurantsBoroughsComponent;
  let fixture: ComponentFixture<RestaurantsBoroughsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantsBoroughsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantsBoroughsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
