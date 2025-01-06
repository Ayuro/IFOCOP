import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonPlaceholderSectionComponent } from './json-placeholder-section.component';

describe('JsonPlaceholderSectionComponent', () => {
  let component: JsonPlaceholderSectionComponent;
  let fixture: ComponentFixture<JsonPlaceholderSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonPlaceholderSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonPlaceholderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
