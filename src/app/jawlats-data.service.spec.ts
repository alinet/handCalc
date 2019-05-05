import { TestBed } from '@angular/core/testing';

import { JawlatsDataService } from './jawlats-data.service';

describe('JawlatsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JawlatsDataService = TestBed.get(JawlatsDataService);
    expect(service).toBeTruthy();
  });
});
