import { TestBed } from '@angular/core/testing';

import { SwGetJsonService } from './sw-get-json.service';

describe('SwGetJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwGetJsonService = TestBed.get(SwGetJsonService);
    expect(service).toBeTruthy();
  });
});
