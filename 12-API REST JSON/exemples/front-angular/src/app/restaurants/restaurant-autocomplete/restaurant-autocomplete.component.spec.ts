import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantAutocompleteComponent } from './restaurant-autocomplete.component';

describe('RestaurantAutocompleteComponent', () => {
  let component: RestaurantAutocompleteComponent;
  let fixture: ComponentFixture<RestaurantAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantAutocompleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
