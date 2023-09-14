import { createReducer, on } from "@ngrx/store";
import { entityOperatorAdaptor, initialOperatorEntityState } from "./entity-operator.state";
import * as EntityActionsList from './entity-operator.actions';


export const operatorEntityReducer = createReducer(
    initialOperatorEntityState,
    on(EntityActionsList.operatorEntityStart, (state) => {
        return { ...state, loading: true }
        // return entityOperatorAdaptor.setOne(state, )
    }),
    on(EntityActionsList.operatorEntitySuccess, (state, action) => {
        // return { ...state, operatorList: action.data, loading: false, errorMessage: '' }
        return entityOperatorAdaptor.setAll(action.data, state)
    } ),
    on(EntityActionsList.operatorEntityFail, (state, action) => {
        return { ...state, loading: false, errorMessage: action.message }
    } )
)