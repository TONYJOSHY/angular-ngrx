import { createReducer, on } from "@ngrx/store";
import { initialOperatorState } from "./operator.state";
import { operatorFail, operatorStart, operatorSuccess } from "./operator.actions";

export const operatorReducer = createReducer(
    initialOperatorState,
    on(operatorStart, (state) => {
        return { ...state, loading: true }
    }),
    on(operatorSuccess, (state, action) => {
        return { ...state, operatorList: action.data, loading: false, errorMessage: '' }
    } ),
    on(operatorFail, (state, action) => {
        return { ...state, loading: false, errorMessage: action.message }
    } )
)