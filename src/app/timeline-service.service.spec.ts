import { TestBed, inject } from '@angular/core/testing';

import { TimelineServiceService } from './timeline-service.service';

describe('TimelineServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimelineServiceService]
    });
  });

  it('should be created', inject([TimelineServiceService], (service: TimelineServiceService) => {
    expect(service).toBeTruthy();
  }));
});
