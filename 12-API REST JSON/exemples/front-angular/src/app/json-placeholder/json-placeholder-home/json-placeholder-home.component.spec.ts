import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonPlaceholderHomeComponent } from './json-placeholder-home.component';

describe('JsonPlaceholderHomeComponent', () => {
  let component: JsonPlaceholderHomeComponent;
  let fixture: ComponentFixture<JsonPlaceholderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonPlaceholderHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonPlaceholderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
