import { TestBed } from '@angular/core/testing';

import { MyNewServiceService } from './my-new-service.service';

describe('MyNewServiceService', () => {
  let service: MyNewServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyNewServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
