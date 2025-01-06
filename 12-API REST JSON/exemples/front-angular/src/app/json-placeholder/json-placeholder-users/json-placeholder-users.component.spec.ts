import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonPlaceholderUsersComponent } from './json-placeholder-users.component';

describe('JsonPlaceholderUsersComponent', () => {
  let component: JsonPlaceholderUsersComponent;
  let fixture: ComponentFixture<JsonPlaceholderUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonPlaceholderUsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonPlaceholderUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
