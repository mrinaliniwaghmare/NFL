import { TestBed, inject } from '@angular/core/testing';

import { CrimeDataServiceService } from './crime-data-service.service';

describe('CrimeDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrimeDataServiceService]
    });
  });

  it('should be created', inject([CrimeDataServiceService], (service: CrimeDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
