import { TestBed } from '@angular/core/testing';

import { UnAuthRequierGuard } from './un-auth-requier.guard';

describe('UnAuthRequierGuard', () => {
  let guard: UnAuthRequierGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnAuthRequierGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
