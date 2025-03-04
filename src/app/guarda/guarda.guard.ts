import type {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

const isRouteActivated = false;

export const routeGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree => {
  const router = inject(Router);

  if (isRouteActivated) {
    return true;
  } else {
    return router.parseUrl('/products');
  }
};
