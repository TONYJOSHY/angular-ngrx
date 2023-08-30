
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './effect.state';

export const AUTH_STATE_NAME = 'auth';

const getCounterState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const getUser = createSelector(getCounterState, (state) => {
  return state.user
});