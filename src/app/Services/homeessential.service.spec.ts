import { TestBed } from '@angular/core/testing';

import { HomeessentialService } from './homeessential.service';

describe('HomeessentialService', () => {
  let service: HomeessentialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeessentialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
