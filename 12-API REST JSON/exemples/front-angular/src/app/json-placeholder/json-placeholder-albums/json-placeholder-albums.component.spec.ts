import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonPlaceholderAlbumsComponent } from './json-placeholder-albums.component';

describe('JsonPlaceholderAlbumsComponent', () => {
  let component: JsonPlaceholderAlbumsComponent;
  let fixture: ComponentFixture<JsonPlaceholderAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonPlaceholderAlbumsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonPlaceholderAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
