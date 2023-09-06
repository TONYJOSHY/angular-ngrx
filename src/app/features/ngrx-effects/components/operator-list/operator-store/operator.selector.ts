import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OperatorState } from './operator.state';
import { getCurrentRoute } from 'src/app/features/ngrx-router/router-store/router.selector';

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

export const getOperatorById = createSelector(
  getOperator, 
  getCurrentRoute, 
  (operator, router) => {
    return operator ? operator.find( (value) => value.id == router.params['id'] ) : null
  } 
)
