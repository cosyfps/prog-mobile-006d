import { TestBed } from '@angular/core/testing';

import { ModerationServiceService } from './moderation-service.service';

describe('ModerationServiceService', () => {
  let service: ModerationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModerationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
