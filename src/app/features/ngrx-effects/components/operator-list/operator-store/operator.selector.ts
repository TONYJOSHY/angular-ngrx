import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OperatorState } from './operator.state';

export const OPERATOR_STATE_NAME = 'operatorItem';

const getOperatorState = createFeatureSelector<OperatorState>(OPERATOR_STATE_NAME);

export const getOperator = createSelector(getOperatorState, (state) => {
  return state.operatorList
});

export const getOperatorLoader = createSelector(getOperatorState, (state) => {
  return state.loading
} )

export const getOperatorError = createSelector(getOperatorState, (state) => {
  return state.errorMessage
} )
