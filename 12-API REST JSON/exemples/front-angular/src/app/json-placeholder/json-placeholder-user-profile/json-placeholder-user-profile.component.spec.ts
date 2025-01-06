import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonPlaceholderUserProfileComponent } from './json-placeholder-user-profile.component';

describe('JsonPlaceholderUserProfileComponent', () => {
  let component: JsonPlaceholderUserProfileComponent;
  let fixture: ComponentFixture<JsonPlaceholderUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonPlaceholderUserProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonPlaceholderUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
