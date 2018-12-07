import { TestBed } from '@angular/core/testing';

import { GetCommonDataService } from './get-common-data.service';

describe('GetCommonDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCommonDataService = TestBed.get(GetCommonDataService);
    expect(service).toBeTruthy();
  });
});
