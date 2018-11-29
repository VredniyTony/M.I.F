import { TestBed } from '@angular/core/testing';

import { CurrentItemResolveService } from './current-item-resolve.service';

describe('CurrentItemResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentItemResolveService = TestBed.get(CurrentItemResolveService);
    expect(service).toBeTruthy();
  });
});
