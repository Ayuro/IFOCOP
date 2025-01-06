import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonPlaceholderAlbumComponent } from './json-placeholder-album.component';

describe('JsonPlaceholderAlbumComponent', () => {
  let component: JsonPlaceholderAlbumComponent;
  let fixture: ComponentFixture<JsonPlaceholderAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonPlaceholderAlbumComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonPlaceholderAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
