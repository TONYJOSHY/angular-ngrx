import { createAction, props } from "@ngrx/store";
import { Operator } from "../../ngrx-effects/service/operator.model";

export const operatorEntityStart = createAction('[Ngrx entity List] start', props<{ params: any }>());
export const operatorEntitySuccess = createAction('[Ngrx entity List] success', props<{ data: Operator[] }>());
export const operatorEntityFail = createAction('[Ngrx entity List] fail', props<{ message: string }>());