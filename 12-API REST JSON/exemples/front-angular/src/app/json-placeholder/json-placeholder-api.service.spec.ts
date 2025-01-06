import { TestBed } from '@angular/core/testing';
import { JsonPlaceholderAPIService } from './json-placeholder-api.service';

describe('JsonPlaceholderAPIService', () => {
  let service: JsonPlaceholderAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonPlaceholderAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
