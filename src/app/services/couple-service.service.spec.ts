import { TestBed } from '@angular/core/testing';

import { CoupleServiceService } from './couple-service.service';

describe('CoupleServiceService', () => {
  let service: CoupleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoupleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
