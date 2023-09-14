import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OperatorState, entityOperatorAdaptor } from "./entity-operator.state";
import { getCurrentRoute } from "../../ngrx-router/router-store/router.selector";

export const OPERATOR_ENTITY_STATE_NAME = 'operatorEntityItem';
const getOperatorState = createFeatureSelector<OperatorState>(OPERATOR_ENTITY_STATE_NAME);

export const entityOperatorSelector = entityOperatorAdaptor.getSelectors()

export const getEntityOperator = createSelector(getOperatorState, entityOperatorSelector.selectAll );
  
// export const getOperatorLoader = createSelector(getOperatorState, (state) => {
// return state.loading
// } )

// export const getOperatorError = createSelector(getOperatorState, (state) => {
// return state.errorMessage
// } )

export const getOperatorById = createSelector(
    getEntityOperator, 
    getCurrentRoute, 
    (operator, router) => {
        return operator ? operator[router.params['id']] : null
    } 
)