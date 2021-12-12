import { TestBed } from '@angular/core/testing';

import { AuthRequierGuard } from './auth-requier.guard';

describe('AuthRequierGuard', () => {
  let guard: AuthRequierGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthRequierGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
