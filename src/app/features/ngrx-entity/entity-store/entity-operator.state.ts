import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Operator } from "../../ngrx-effects/service/operator.model";

export interface OperatorState extends EntityState<Operator> {
    // operatorList : Operator[];
    // loading: boolean;
    // errorMessage: string;
}

export const entityOperatorAdaptor = createEntityAdapter<Operator>()

export const initialOperatorEntityState: OperatorState = entityOperatorAdaptor.getInitialState({
    operatorList:[],
    // loading: false,
    // errorMessage: ''
})
   