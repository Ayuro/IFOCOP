import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonPlaceholderUserAlbumsComponent } from './json-placeholder-user-albums.component';

describe('JsonPlaceholderUserAlbumsComponent', () => {
  let component: JsonPlaceholderUserAlbumsComponent;
  let fixture: ComponentFixture<JsonPlaceholderUserAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonPlaceholderUserAlbumsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonPlaceholderUserAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
