import { TestBed } from '@angular/core/testing';
import { JsonPlaceholderActiveUserService } from './json-placeholder-active-user.service';

describe('JsonPlaceholderActiveUserService', () => {
  let service: JsonPlaceholderActiveUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonPlaceholderActiveUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
