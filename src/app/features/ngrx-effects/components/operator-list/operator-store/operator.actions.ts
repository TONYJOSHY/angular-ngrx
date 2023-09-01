import { createAction, props } from "@ngrx/store";
import { Operator } from "../../../service/operator.model";

export const operatorStart = createAction('[Operator List] start', props<{ params: any }>());
export const operatorSuccess = createAction('[Operator List] success', props<{ data: Operator[] }>());
export const operatorFail = createAction('[Operator List] fail', props<{ message: string }>());