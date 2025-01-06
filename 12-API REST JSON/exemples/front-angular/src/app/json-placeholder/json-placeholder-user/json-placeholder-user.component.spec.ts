import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonPlaceholderUserComponent } from './json-placeholder-user.component';

describe('JsonPlaceholderUserComponent', () => {
  let component: JsonPlaceholderUserComponent;
  let fixture: ComponentFixture<JsonPlaceholderUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonPlaceholderUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonPlaceholderUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
