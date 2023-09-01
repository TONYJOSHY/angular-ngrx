import { Operator } from "../../../service/operator.model";

export interface OperatorState{
    operatorList : Operator[];
    loading: boolean;
    errorMessage: string;
}

export const initialOperatorState: OperatorState = {
    operatorList: [],
    loading: false,
    errorMessage: ''
}