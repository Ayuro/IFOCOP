import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonPlaceholderUserPostsComponent } from './json-placeholder-user-posts.component';

describe('JsonPlaceholderUserPostsComponent', () => {
  let component: JsonPlaceholderUserPostsComponent;
  let fixture: ComponentFixture<JsonPlaceholderUserPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonPlaceholderUserPostsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonPlaceholderUserPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
