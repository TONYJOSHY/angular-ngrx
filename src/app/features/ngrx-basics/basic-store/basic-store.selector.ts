import { CounterState } from './basic-store.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const COUNTER_STATE_NAME = 'firstCounter';

const getCounterState = createFeatureSelector<CounterState>(COUNTER_STATE_NAME);

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getName = createSelector(getCounterState, (state) => {
  return state.name;
});