import { TestBed } from '@angular/core/testing';
import type { CanActivateFn } from '@angular/router';

import { routeGuard } from './guarda.guard';

describe('guardaGuard', () => {
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  const executeGuard: CanActivateFn = (...guardParameters) =>
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    TestBed.runInInjectionContext(() => routeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
