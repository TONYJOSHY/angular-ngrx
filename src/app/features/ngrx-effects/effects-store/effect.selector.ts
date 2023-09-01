
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './effect.state';

export const AUTH_STATE_NAME = 'auth';

const getEffectsState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const getUser = createSelector(getEffectsState, (state) => {
  return state.user
});

export const getLoader = createSelector(getEffectsState, (state) => {
  return state.loading
} )

export const getErrorMessage = createSelector(getEffectsState, (state) => {
  return state.errorMessage
} )