import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from '../features/ngrx-effects/effects-store/effect.state';
import { map } from 'rxjs';
import { getUser } from '../features/ngrx-effects/effects-store/effect.selector';

export const appGuard: CanActivateFn = (route, state) => {

  const appState = inject(Store<AuthState>);
  const user$ = appState.select(getUser);
  return user$.pipe( map( (user) => {
    if(!user) return false;
    return true;
  } )  )
};
