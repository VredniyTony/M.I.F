import { TestBed } from '@angular/core/testing';

import { CurrentCategoryResolveService } from './current-category-resolve.service';

describe('CurrentCategoryResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentCategoryResolveService = TestBed.get(CurrentCategoryResolveService);
    expect(service).toBeTruthy();
  });
});
