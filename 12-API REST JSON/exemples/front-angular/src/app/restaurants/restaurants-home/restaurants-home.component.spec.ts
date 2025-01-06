import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantsHomeComponent } from './restaurants-home.component';

describe('RestaurantsHomeComponent', () => {
  let component: RestaurantsHomeComponent;
  let fixture: ComponentFixture<RestaurantsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantsHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
