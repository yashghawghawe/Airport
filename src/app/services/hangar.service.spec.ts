import { TestBed } from '@angular/core/testing';

import { HangarService } from './hangar.service';

describe('HangarService', () => {
  let service: HangarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HangarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
