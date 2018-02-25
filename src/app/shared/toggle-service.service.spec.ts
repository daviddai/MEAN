import { TestBed, inject } from '@angular/core/testing';

import { TogglerServiceService } from './toggle-service.service';

describe('TogglerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TogglerServiceService]
    });
  });

  it('should be created', inject([TogglerServiceService], (service: TogglerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
