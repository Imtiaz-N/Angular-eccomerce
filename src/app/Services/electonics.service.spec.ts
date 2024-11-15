import { TestBed } from '@angular/core/testing';

import { ElectonicsService } from './electonics.service';

describe('ElectonicsService', () => {
  let service: ElectonicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectonicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
